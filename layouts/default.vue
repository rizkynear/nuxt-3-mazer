<script setup lang="ts"></script>

<template>
	<div>
		<div id="app">
			<LayoutsSidebar/>

			<div id="main" class="layout-navbar">
				<LayoutsHeader/>

				<div id="main-content">
					<slot />
					
					<LayoutsFooter/>
				</div>
			</div>
		</div>
	</div>
</template>
