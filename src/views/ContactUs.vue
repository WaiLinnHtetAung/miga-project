<template>
    <div class="mt-4">
        <form action="">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Email</label>
                <input type="email" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Course</label>
                <select name="" id="" class="form-select">
                    <option class="text-dark" value="english">English</option>
                    <option class="text-dark" value="bio">Bio</option>
                    <option class="text-dark" value="chemistry">Chemistry</option>
                </select>
            </div>
            <div class="form-group">
                <label for="">Message</label>
                <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
            </div>

            <div class="form-group mt-3">
                <button class="btn">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    form {
        width: 600px;
        margin: 20px auto;
    }

</style>
