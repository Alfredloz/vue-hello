let container = new Vue({
    el: '#container',
    data: {
        titolo: 'Benvenuto alla pagina',
        img: 'https://cise-egypt.com/wp-content/uploads/2019/09/WELCOME-ST-IVES.jpg',
        imgTwo: null,
    },
    methods:{
        putImg: function(){
            if (this.imgTwo == null) {
                return this.imgTwo = 'https://i.giphy.com/media/llKJGxQ1ESmac/giphy.gif';
            } else {
                return this.imgTwo = null;
            }
        }
    }
});