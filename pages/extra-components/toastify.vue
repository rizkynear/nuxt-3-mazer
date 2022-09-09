<script setup lang="ts">
    import Toastify from 'toastify-js'

    const basic = () => {
        Toastify({
            text: "This is a toast",
            duration: 3000
        }).showToast();
    }

    const background = () => {
        Toastify({
            text: "This is a toast",
            duration: 3000,
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
        }).showToast();
    }

    const close = () => {
        Toastify({
            text: "Click close button",
            duration: 3000,
            close:true,
            backgroundColor: "#4fbe87"
        }).showToast();
    }

    const topLeft = () => {
        Toastify({
            text: "This is toast in top left",
            duration: 3000,
            close:true,
            gravity:"top",
            position: "left",
            backgroundColor: "#4fbe87",
        }).showToast();
    }
    
    const topCenter = () => {
        Toastify({
            text: "This is toast in top center",
            duration: 3000,
            close:true,
            gravity:"top",
            position: "center",
            backgroundColor: "#4fbe87",
        }).showToast();
    }

    const topRight = () => {
        Toastify({
            text: "This is toast in top right",
            duration: 3000,
            close:true,
            gravity:"top",
            position: "right",
            backgroundColor: "#4fbe87",
        }).showToast();
    }

    const bottomRight = () => {
        Toastify({
            text: "This is toast in bottom right",
            duration: 3000,
            close:true,
            gravity:"bottom",
            position: "right",
            backgroundColor: "#4fbe87",
        }).showToast();
    }

    const bottomCenter = () => {
        Toastify({
            text: "This is toast in bottom center",
            duration: 3000,
            close:true,
            gravity:"bottom",
            position: "center",
            backgroundColor: "#4fbe87",
        }).showToast();
    }

    const bottomLeft = () => {
        Toastify({
            text: "This is toast in bottom left",
            duration: 3000,
            close:true,
            gravity:"bottom",
            position: "left",
            backgroundColor: "#4fbe87",
        }).showToast();
    }
</script>

<template>
	<div class="page-heading">
		<div class="page-title">
			<div class="row">
				<div class="col-12 col-md-6 order-md-1 order-last">
					<h3>Toastify</h3>
					<p class="text-subtitle text-muted">
						Better notification messages
					</p>
				</div>
				<div class="col-12 col-md-6 order-md-2 order-first">
					<nav
						aria-label="breadcrumb"
						class="breadcrumb-header float-start float-lg-end">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<NuxtLink to="/">Dashboard</NuxtLink>
							</li>
							<li
								class="breadcrumb-item active"
								aria-current="page">
								Toastify
							</li>
						</ol>
					</nav>
				</div>
			</div>
		</div>
		<section class="section">
			<div class="row">
				<div class="col-12">
					<div class="card">
						<div class="card-header">
							<h4 class="card-title">Types</h4>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-12 col-md-4">
									<button
										@click="basic"
										class="btn btn-outline-primary btn-block btn-lg">
										Basic Toast
									</button>
								</div>
								<div class="col-12 col-md-4">
									<button
										@click="background"
										class="btn btn-outline-primary btn-block btn-lg">
										Custom Background
									</button>
								</div>
								<div class="col-12 col-md-4">
									<button
										@click="close"
										class="btn btn-outline-primary btn-block btn-lg">
										Close Button
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="section">
			<div class="row">
				<div class="col-12">
					<div class="card">
						<div class="card-header">
							<h4 class="card-title">Position</h4>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-12 col-md-4">
									<button
										@click="topLeft"
										class="btn btn-outline-primary btn-block btn-lg">
										Top Left
									</button>
								</div>
								<div class="col-12 col-md-4">
									<button
										@click="topCenter"
										class="btn btn-outline-primary btn-block btn-lg">
										Top Center
									</button>
								</div>
								<div class="col-12 col-md-4">
									<button
										@click="topRight"
										class="btn btn-outline-primary btn-block btn-lg">
										Top Right
									</button>
								</div>
							</div>
							<div class="row mt-3">
								<div class="col-12 col-md-4">
									<button
										@click="bottomLeft"
										class="btn btn-outline-primary btn-block btn-lg">
										Bottom Left
									</button>
								</div>
								<div class="col-12 col-md-4">
									<button
										@click="bottomCenter"
										class="btn btn-outline-primary btn-block btn-lg">
										Bottom Center
									</button>
								</div>
								<div class="col-12 col-md-4">
									<button
										@click="bottomRight"
										class="btn btn-outline-primary btn-block btn-lg">
										Bottom Right
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>