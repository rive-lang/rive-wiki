/**
 * Mobile Sidebar Enhancement Script
 * Fixes mobile sidebar display and navigation issues
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Only run on mobile devices
    if (window.innerWidth > 996) return;

    enhanceMobileSidebar();
    addSwipeGestures();
    improveTouchTargets();
    fixMobileNavigation();
  }

  function enhanceMobileSidebar() {
    const sidebarContainer = document.querySelector('.theme-doc-sidebar-container');
    if (!sidebarContainer) return;

    // Add close button
    addCloseButton(sidebarContainer);
    
    // Improve sidebar behavior
    improveSidebarBehavior(sidebarContainer);
  }

  function addCloseButton(container) {
    // Check if close button already exists
    if (container.querySelector('.sidebar__close')) return;

    const closeButton = document.createElement('button');
    closeButton.className = 'sidebar__close';
    closeButton.innerHTML = '×';
    closeButton.setAttribute('aria-label', 'Close sidebar');
    closeButton.setAttribute('title', 'Close sidebar');
    
    closeButton.addEventListener('click', () => {
      closeSidebar();
    });

    container.appendChild(closeButton);
  }

  function improveSidebarBehavior(container) {
    // Add data attribute for CSS targeting
    container.setAttribute('data-sidebar-open', 'false');

    // Listen for sidebar state changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const isOpen = container.classList.contains('sidebar--open') || 
                        container.style.transform === 'translateX(0px)' ||
                        !container.style.transform.includes('-100%');
          
          container.setAttribute('data-sidebar-open', isOpen.toString());
          document.body.setAttribute('data-sidebar-open', isOpen.toString());
        }
      });
    });

    observer.observe(container, {
      attributes: true,
      attributeFilter: ['class', 'style']
    });

    // Handle escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && container.getAttribute('data-sidebar-open') === 'true') {
        closeSidebar();
      }
    });

    // Handle overlay click
    container.addEventListener('click', (e) => {
      if (e.target === container) {
        closeSidebar();
      }
    });
  }

  function closeSidebar() {
    const toggleButton = document.querySelector('.navbar__toggle');
    if (toggleButton) {
      toggleButton.click();
    }
  }

  function fixMobileNavigation() {
    // Fix navbar sidebar display
    const navbarSidebar = document.querySelector('.navbar-sidebar');
    if (navbarSidebar) {
      navbarSidebar.style.display = 'block';
      navbarSidebar.style.position = 'fixed';
      navbarSidebar.style.top = '0';
      navbarSidebar.style.left = '0';
      navbarSidebar.style.width = '280px';
      navbarSidebar.style.height = '100vh';
      navbarSidebar.style.zIndex = '1000';
      navbarSidebar.style.transform = 'translateX(-100%)';
      navbarSidebar.style.transition = 'transform 0.3s ease';
    }

    // Handle navbar toggle
    const toggleButton = document.querySelector('.navbar__toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        setTimeout(() => {
          const navbarSidebar = document.querySelector('.navbar-sidebar');
          if (navbarSidebar) {
            const isOpen = navbarSidebar.style.transform === 'translateX(0px)' || 
                          navbarSidebar.classList.contains('navbar-sidebar--show');
            
            if (isOpen) {
              navbarSidebar.style.transform = 'translateX(0)';
              document.body.style.overflow = 'hidden';
            } else {
              navbarSidebar.style.transform = 'translateX(-100%)';
              document.body.style.overflow = '';
            }
          }
        }, 50);
      });
    }
  }

  function addSwipeGestures() {
    const sidebarContainer = document.querySelector('.theme-doc-sidebar-container');
    if (!sidebarContainer) return;

    let startX = 0;
    let startY = 0;
    let isDragging = false;

    sidebarContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = false;
    });

    sidebarContainer.addEventListener('touchmove', (e) => {
      if (!startX || !startY) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;

      // Determine if this is a horizontal swipe
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        isDragging = true;
        e.preventDefault();
      }
    });

    sidebarContainer.addEventListener('touchend', (e) => {
      if (!isDragging) return;

      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;

      // Swipe left to close (if sidebar is open)
      if (diffX > 100 && sidebarContainer.getAttribute('data-sidebar-open') === 'true') {
        closeSidebar();
      }

      startX = 0;
      startY = 0;
      isDragging = false;
    });
  }

  function improveTouchTargets() {
    // Ensure all menu links have proper touch targets
    const menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(link => {
      // Add touch feedback
      link.addEventListener('touchstart', () => {
        link.style.backgroundColor = 'var(--ifm-menu-color-background-hover)';
      });

      link.addEventListener('touchend', () => {
        setTimeout(() => {
          link.style.backgroundColor = '';
        }, 150);
      });
    });

    // Improve collapsible menu items
    const collapsibleItems = document.querySelectorAll('.menu__list-item-collapsible');
    collapsibleItems.forEach(item => {
      const link = item.querySelector('.menu__link');
      if (link) {
        link.addEventListener('click', (e) => {
          // Add visual feedback
          item.style.backgroundColor = 'var(--ifm-menu-color-background-hover)';
          setTimeout(() => {
            item.style.backgroundColor = '';
          }, 200);
        });
      }
    });
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 996) {
      // Reset mobile-specific styles on desktop
      const sidebarContainer = document.querySelector('.theme-doc-sidebar-container');
      if (sidebarContainer) {
        sidebarContainer.removeAttribute('data-sidebar-open');
        document.body.removeAttribute('data-sidebar-open');
      }
    }
  });

})();
