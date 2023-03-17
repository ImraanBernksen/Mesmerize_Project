<template>
<button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#editProducts"><i class="fa-solid fa-pen-to-square"></i></button>

<!-- Modal -->
<div class="modal fade" id="editProducts" tabindex="-1" aria-labelledby="editProducts" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="editProducts">Edit Products</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="form-outline mb-4">
            <input type="text" placeholder="Name" class="form-control" />
        </div>
        <div class="form-outline mb-4">
            <input type="text" placeholder="Description" class="form-control" />
        </div>
        <div class="form-outline mb-4">
            <input type="text" placeholder="Category" class="form-control" />
        </div>
        <div class="form-outline mb-4">
            <input type="text" placeholder="Price" class="form-control" />
        </div>
        <div class="form-outline mb-4">
            <input type="text" placeholder="Image" class="form-control" />
        </div>
        <div class="form-outline mb-4">
            <input type="text" placeholder="Quantity" class="form-control" />
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
    Name: 'UpdateProduct'
}
</script>
<style>
    
</style>