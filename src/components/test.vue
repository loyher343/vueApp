<template>
    <div class="test">
        <h1>{{title}}</h1>
        <p>{{user.first_name}}</p>
        <p v-text="user.last_name"></p>
        <span v-html="sonnet121"></span>
       
    </div>
</template>


<script>
    export default {
        name: 'test',
        data() {
            return {
                title: 'Hello World',
                sonnet121: '<p>Tis better to be vile than vile esteemed When not to be receives reproach of being, And the just pleasure lost, wich is so deemed Not by our feeling but by others seeing. for why should others false adulterate eyes Give salutatuon to my sportive blood? Or on my frailties why are frailer spies, Which in their wills count bad that I think good? No, I am that I am; and they that level At my abuses reckon up their own: I may be straight though they themselves be bevel; by their rank thoughts m y deeds must not be shown, Unless this general evil they maintain: All men are bad and in their badness reign</p>',
                user: {
                    first_name: 'Loy',
                    last_name: 'Hernandez'
                }
                
            }
        }
    }
</script>


<style scoped>
</style>