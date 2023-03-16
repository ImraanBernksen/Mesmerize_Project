<template>
    <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Add User</button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="form-outline mb-4">
                <input type="text" id="form3Example2" placeholder="Name" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <input type="text" id="form3Example2" placeholder="Surname" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <input type="email" id="form3Example2" placeholder="Email" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <input type="password" id="form3Example2" placeholder="Password" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <input type="text" id="form3Example2" placeholder="Image" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <input type="date" id="form3Example2" placeholder="Date" class="form-control" />
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-outline-dark">Save changes</button>
        </div>
        </div>
    </div>
    </div>
      
    </template>
    <script>
    export default {
        Name: 'AddUser'
    }
    </script>
    <style>
        
    </style>