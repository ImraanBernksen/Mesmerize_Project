<template>
    <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#addUsers">Add User</button>
    
    <!-- Modal -->
    <div class="modal fade" id="addUsers" tabindex="-1" aria-labelledby="addUsers" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5 text-dark" id="addUsers">Add User</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form @submit.prevent="registerUser">
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.firstName" placeholder="Name" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.lastName" placeholder="Surname" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="email" v-model="payload.userEmail" placeholder="Email" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="password" v-model="payload.userPassword" placeholder="Password" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.userImg" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.userRole" placeholder="Role" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="date" v-model="payload.joinDate" class="form-control" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-outline-dark">Add User</button>
                </div>
            </form>
            </div>
        </div>
    </div>
    </div>
      
    </template>
    <script>
    export default {
        Name: 'AddUser',
        data() {
            return{
                payload: {
                    firstName: '',
                    lastName: '',
                    userEmail: '',
                    userPassword: '',
                    userImg: 'https://i.postimg.cc/gk1Rx1wb/Default-User-Profile.jpg',
                    userRole: 'User',
                    joinDate: ''
                }
            }
        },
        computed: {
            message() {
                return this.$store.state.message
            }
        },
        methods: {
            registerUser() {
                console.log('Debug', this.payload);
                this.$store.dispatch('registerUser', this.payload)
            }
        }
    }
    </script>
    <style>
        
    </style>