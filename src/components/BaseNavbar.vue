<script>
export default {
    name: 'BaseNavbar'
}
</script>


<template>

    <nav>
        <h1>Boolfolio</h1>
        <ul>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/contact-us">Contattaci</RouterLink>
            </li>
        </ul>
    </nav>

</template>