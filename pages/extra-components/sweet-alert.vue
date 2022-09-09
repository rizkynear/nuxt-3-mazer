<script setup lang="ts">
	import Swal from 'sweetalert2';

	const basic = () => {
		Swal.fire('Any fool can use a computer');
	}
	
	const title = () => {
		Swal.fire(
			'The Internet?',
			'That thing is still around?',
			'question'
		)
	} 

	const footer = () => {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
			footer: '<a href>Why do I have this issue?</a>'
		})
	} 

	const success = () => {
		Swal.fire({
			icon: "success",
			title: "Success"
		})
	} 

	const error = () => {
		Swal.fire({
			icon: "error",
			title: "Error"
		})
	} 

	const warning = () => {
		Swal.fire({
			icon: "warning",
			title: "Warning"
		})
	} 

	const info = () => {
		Swal.fire({
			icon: "info",
			title: "Info"
		})
	} 

	const question = () => {
		Swal.fire({
			icon: "question",
			title: "Question"
		})
	} 

	const text = () => {
		Swal.fire({
			title: 'Enter your IP address',
			input: 'text',
			inputLabel: 'Your IP address',
			showCancelButton: true,
		})
	} 

	const email = async () => {
		const { value: email } = await Swal.fire({
			title: 'Input email address',
			input: 'email',
			inputLabel: 'Your email address',
			inputPlaceholder: 'Enter your email address'
		})

		if (email) Swal.fire(`Entered email: ${email}`)
	} 

	const url = async () => {
		const { value: url } = await Swal.fire({
			input: 'url',
			inputLabel: 'URL address',
			inputPlaceholder: 'Enter the URL'
		})

		if (url) Swal.fire(`Entered url: ${url}`)
	} 

	const password = async () => {
		const { value: password } = await Swal.fire({
			title: 'Enter your password',
			input: 'password',
			inputLabel: 'Password',
			inputPlaceholder: 'Enter your password'
		})

		if (password) Swal.fire(`Entered password: ${password}`)
	} 

	const textarea = async () => {
		const { value: text } = await Swal.fire({
			input: 'textarea',
			inputLabel: 'Message',
			inputPlaceholder: 'Type your message here...',
			inputAttributes: {
			'aria-label': 'Type your message here'
			},
			showCancelButton: true
		})

		if (text) Swal.fire(text)
	} 

	const select = async () => {
		const { value: fruit } = await Swal.fire({
			title: 'Select field validation',
                input: 'select',
                inputOptions: {
                'Fruits': {
                    apples: 'Apples',
                    bananas: 'Bananas',
                    grapes: 'Grapes',
                    oranges: 'Oranges'
                },
                'Vegetables': {
                    potato: 'Potato',
                    broccoli: 'Broccoli',
                    carrot: 'Carrot'
                },
                'icecream': 'Ice cream'
                },
                inputPlaceholder: 'Select a fruit',
                showCancelButton: true,
                inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'oranges') {
                    	resolve();
                    } else {
                    	resolve('You need to select oranges :)')
                    }
                })
                }
		})

		if (fruit) Swal.fire(`You selected: ${fruit}`)
	} 
</script>

<template>
	<div class="page-heading">
		<div class="page-title">
			<div class="row">
				<div class="col-12 col-md-6 order-md-1 order-last">
					<h3>Sweet Alert</h3>
					<p class="text-subtitle text-muted">
						A beautiful replacement for javascript alerts
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
								Sweet Alert
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
							<h4 class="card-title">Basic Sweet Alert</h4>
							<p class="text-muted">
								SweetAlert automatically centers itself on the
								page and looks great no matter if you're using a
								desktop computer, mobile or tablet. It's even
								highly customizable, as you can see below!
							</p>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-md-4 col-12">
									<button
										@click="basic"
										class="btn btn-outline-primary btn-lg btn-block">
										Basic Example
									</button>
								</div>
								<div class="col-md-4 col-12">
									<button
										@click="title"
										class="btn btn-outline-primary btn-lg btn-block">
										A title with a text under
									</button>
								</div>
								<div class="col-md-4 col-12">
									<button
										@click="footer"
										class="btn btn-outline-primary btn-lg btn-block">
										With Footer
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
							<h4 class="card-title">Types</h4>
							<p class="text-muted">
								The type of the modal. SweetAlert comes with 5
								built-in types which will show a corresponding
								icon animation: "warning", "error", "success"
								and "info". You can also set it as "input" to
								get a prompt modal. It can either be put in the
								object under the key "icon" or passed as the
								third parameter of the function.
							</p>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-md-4 col-12">
									<button
										@click="success"
										class="btn btn-outline-success btn-lg btn-block">
										Success
									</button>
								</div>
								<div class="col-md-4 col-12">
									<button
										@click="error"
										class="btn btn-outline-danger btn-lg btn-block">
										Error
									</button>
								</div>
								<div class="col-md-4 col-12">
									<button
										@click="warning"
										class="btn btn-outline-warning btn-lg btn-block">
										Warning
									</button>
								</div>
							</div>
							<div class="row mt-3">
								<div class="col-md-6 col-12">
									<button
										@click="info"
										class="btn btn-outline-info btn-lg btn-block">
										Info
									</button>
								</div>
								<div class="col-md-6 col-12">
									<button
										@click="question"
										class="btn btn-outline-secondary btn-lg btn-block">
										Question
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
							<h4 class="card-title">Alert Input</h4>
							<p class="text-muted">
								The type of the modal. SweetAlert comes with 5
								built-in types which will show a corresponding
								icon animation: "warning", "error", "success"
								and "info". You can also set it as "input" to
								get a prompt modal. It can either be put in the
								object under the key "icon" or passed as the
								third parameter of the function.
							</p>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-md-4 col-12">
									<button
										@click="text"
										class="btn btn-outline-success btn-lg btn-block">
										Text
									</button>
								</div>
								<div class="col-md-4 col-12">
									<button
										@click="email"
										class="btn btn-outline-danger btn-lg btn-block">
										Email
									</button>
								</div>
								<div class="col-md-4 col-12">
									<button
										@click="url"
										class="btn btn-outline-warning btn-lg btn-block">
										URL
									</button>
								</div>
							</div>
							<div class="row mt-3">
								<div class="col-md-4 col-12">
									<button
										@click="password"
										class="btn btn-outline-info btn-lg btn-block">
										Password
									</button>
								</div>
								<div class="col-md-4 col-12">
									<button
										@click="textarea"
										class="btn btn-outline-secondary btn-lg btn-block">
										Textarea
									</button>
								</div>
								<div class="col-md-4 col-12">
									<button
										@click="select"
										class="btn btn-outline-secondary btn-lg btn-block">
										Select
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