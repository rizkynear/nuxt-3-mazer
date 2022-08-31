<script setup lang="ts">
	import PerfectScrollbar from 'perfect-scrollbar';

	onMounted(() => {
		const container = document.querySelector('.sidebar-wrapper');
		
		new PerfectScrollbar(container, {
			wheelPropagation: false
		})
	})

	function slideToggle(t,e,o = false){0===t.clientHeight?j(t,e,o,!0):j(t,e,o)}function slideUp(t,e,o){j(t,e,o)}function slideDown(t,e,o){j(t,e,o,!0)}function j(t,e,o,i = false){void 0===e&&(e=400),void 0===i&&(i=!1),t.style.overflow="hidden",i&&(t.style.display="block");var p,l=window.getComputedStyle(t),n=parseFloat(l.getPropertyValue("height")),a=parseFloat(l.getPropertyValue("padding-top")),s=parseFloat(l.getPropertyValue("padding-bottom")),r=parseFloat(l.getPropertyValue("margin-top")),d=parseFloat(l.getPropertyValue("margin-bottom")),g=n/e,y=a/e,m=s/e,u=r/e,h=d/e;window.requestAnimationFrame(function l(x){void 0===p&&(p=x);var f=x-p;i?(t.style.height=g*f+"px",t.style.paddingTop=y*f+"px",t.style.paddingBottom=m*f+"px",t.style.marginTop=u*f+"px",t.style.marginBottom=h*f+"px"):(t.style.height=n-g*f+"px",t.style.paddingTop=a-y*f+"px",t.style.paddingBottom=s-m*f+"px",t.style.marginTop=r-u*f+"px",t.style.marginBottom=d-h*f+"px"),f>=e?(t.style.height="",t.style.paddingTop="",t.style.paddingBottom="",t.style.marginTop="",t.style.marginBottom="",t.style.overflow="",i||(t.style.display="none"),"function"==typeof o&&o()):window.requestAnimationFrame(l)})}

	const toggleDropdown = (event: any) => {
		const subMenu = event.target.parentElement.className == 'sidebar-link' 
			? event.target.parentElement.nextElementSibling
			: event.target.nextElementSibling;

		if (subMenu.classList.contains('submenu')) {
			if( subMenu.classList.contains('active') ) subMenu.style.display = "block"

			if( subMenu.style.display == "none" ) subMenu.classList.add('active')
			else subMenu.classList.remove('active')

			slideToggle(subMenu, 300);
		}
	}

	const toggleSidebar = (event: any) => {
		document.getElementById('sidebar').classList.toggle('active');
	}
</script>

<template>
	<div id="sidebar" class="active">
		<div class="sidebar-wrapper active">
			<div class="sidebar-header position-relative">
				<div class="d-flex justify-content-center align-items-center">
					<div class="logo">
						<a href="/"
							><img
								src="assets/images/logo/logo.svg"
								alt="Logo"
								srcset=""
						/></a>
					</div>
					<div class="sidebar-toggler x">
						<a href="#" class="sidebar-hide d-xl-none d-block"
							@click="toggleSidebar"
							><i class="bi bi-x bi-middle"></i
						></a>
					</div>
				</div>
			</div>
			<div class="sidebar-menu">
				<ul class="menu">
					<li class="sidebar-title">Menu</li>
					<li class="sidebar-item">
						<a href="/" class="sidebar-link">
							<i class="bi bi-grid-fill"></i>
							<span>Dashboard</span>
						</a>
					</li>
					<li class="sidebar-item has-sub">
						<a href="#" class="sidebar-link" @click="toggleDropdown">
							<i class="bi bi-stack"></i>
							<span>Components</span>
						</a>
						<ul class="submenu">
							<li class="submenu-item">
								<a href="components/alert">Alert</a>
							</li>
							<li class="submenu-item">
								<a href="component-badge.html">Badge</a>
							</li>
							<li class="submenu-item">
								<a href="component-breadcrumb.html"
									>Breadcrumb</a
								>
							</li>
							<li class="submenu-item">
								<a href="component-button.html">Button</a>
							</li>
							<li class="submenu-item">
								<a href="component-card.html">Card</a>
							</li>
							<li class="submenu-item">
								<a href="component-carousel.html">Carousel</a>
							</li>
							<li class="submenu-item">
								<a href="component-collapse.html">Collapse</a>
							</li>
							<li class="submenu-item">
								<a href="component-dropdown.html">Dropdown</a>
							</li>
							<li class="submenu-item">
								<a href="component-list-group.html"
									>List Group</a
								>
							</li>
							<li class="submenu-item">
								<a href="component-modal.html">Modal</a>
							</li>
							<li class="submenu-item">
								<a href="component-navs.html">Navs</a>
							</li>
							<li class="submenu-item">
								<a href="component-pagination.html"
									>Pagination</a
								>
							</li>
							<li class="submenu-item">
								<a href="component-progress.html">Progress</a>
							</li>
							<li class="submenu-item">
								<a href="component-spinner.html">Spinner</a>
							</li>
							<li class="submenu-item">
								<a href="component-toasts.html">Toasts</a>
							</li>
							<li class="submenu-item">
								<a href="component-tooltip.html">Tooltip</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>