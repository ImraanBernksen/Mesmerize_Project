<template>
    <button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#editUsers"><i class="fa-solid fa-pen-to-square"></i></button>
    
    <!-- Modal -->
    <div class="modal fade" id="editUsers" tabindex="-1" aria-labelledby="editUsers" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="editUsers">Edit Users</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="form-outline mb-4">
                <input type="text" placeholder="Name" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <input type="text" placeholder="Surname" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <input type="email" placeholder="Email" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <input type="password" placeholder="Password" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <input type="text" placeholder="Image" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <input type="text" placeholder="Role" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <input type="date" placeholder="Date" class="form-control" />
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
        Name: 'UpdateUser'
    }
    </script>
    <style>
        
    </style>