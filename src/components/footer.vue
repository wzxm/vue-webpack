<template>
    <div class='footer'>
        <p>
            <router-link to="/home" active-class="active">首页</router-link>
            <router-link to="/list" active-class="active">跳转1</router-link>
            <router-link to="/hello" active-class="active">跳转2</router-link>
        </p>
    </div>
</template>
<style>
    .footer{
        width: 100%;
        background: #fff;
        border-top: 1px solid #dedede;
        display: table;
    }
    .footer a{
        width: 12%;
        display: table-cell;
        text-align: center;
        text-decoration: none;
        color: #666
    }
    .active{
        color:red !important;
    }
</style>