<template>
    <div class="test">
        <h1>{{title}}</h1>
        <input type='text' v-model="title"><br />
        <p v-if="showName">{{user.first_name}}</p>
        <p v-text="user.last_name"></p>
        <span v-html="sonnet121"></span>
        <ul>
            <li v-for="item in items">{{item.title}}</li>
        </ul>
        <button v-on:click="greet">Say Greeting</button>
        <br />
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
        <hr />
        <lable>First Name: </lable><input type="text" v-model="user.first_name">
        <lable>Last Name: </lable><input type="text" v-model="user.last_name">
        <h3>{{fullName}}</h3>
        <h2>{{msg}}</h2>
       
    </div>
</template>


<script>
    export default {
        name: 'test',
        props: {
            msg:{
                type: String,
                default:'Foobar'
            }
        },
        data() {
            return {
                

                title: 'Hello World',
                sonnet121: '<p>Tis better to be vile than vile esteemed When not to be receives reproach of being, And the just pleasure lost, wich is so deemed Not by our feeling but by others seeing. for why should others false adulterate eyes Give salutatuon to my sportive blood? Or on my frailties why are frailer spies, Which in their wills count bad that I think good? No, I am that I am; and they that level At my abuses reckon up their own: I may be straight though they themselves be bevel; by their rank thoughts m y deeds must not be shown, Unless this general evil they maintain: All men are bad and in their badness reign</p>',
                user: {
                    first_name: 'Loy',
                    last_name: 'Hernandez'
                },
                showName: true,
                items: [
                    {title: 'Items One'},
                    {title: 'Items Two'},
                    {title: 'Itmes Three'}
                ]
            }
        },
        methods: {
            greet: function(){
                alert('Hello UwU')
            },
            pressKey: function(e){
                console.log(e.target.value);
            },
            enterHit: function(){
                console.log("you hit enter")
            }
        },
        computed: {
            fullName: function(){
                return this.user.first_name+ " " +this.user.last_name;
            }
        }
    }
</script>


<style scoped>
</style>