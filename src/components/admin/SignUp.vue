<template>
    <section class="section">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h2 class="title has-text-centered">Sign Up</h2>
                <form method="POST" @submit.prevent="signup">
                    <div class="field">
                        <label class="label">Username</label>

                        <p class="control">
                            <input type="text" class="input" v-model="username">
                        </p>
                    </div>
                    <div class="field">
                        <label class="label">E-mail address</label>

                        <p class="control">
                            <input type="email" class="input" v-model="email">
                        </p>
                    </div>
                    <div class="field">
                        <label class="lebel">Password</label>

                        <p class="control">
                            <input type="password" class="input" v-model="password">
                        </p>
                    </div>
                    <p class="control">
                        <button class="button is-primary is-fullwidth is-uppercase">Sign up</button>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { SIGNUP_MUTATION } from '@/graphql'

export default {
    name: 'SignUp',
    data () {
        return {
            username: '',
            email: '',
            password   
        }
    },
    methods: {
        signup () {
            this.$apollo.mutate({
                mutation: SIGNUP_MUTATION,
                variables: {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }
            })
            .then(response => {
                // redirect to login page
                this.$router.replace('/login')
            })
            // error in creating account not handled yet - updates in the future
        }
    }
}
</script>