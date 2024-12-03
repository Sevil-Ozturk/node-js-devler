posts = [
        {postTitle:'sevilin postu' ,postContent:'web programlama'},
        {postTitle:'queens post' ,postContent:'star girl'}
    ]

    function listPost()
    {
        return new Promise((resolve) => {
            console.log('postlar sıralanıyor');
            posts.forEach((post,index) => console.log(`${index + 1}. ${post.postTitle} : ${post.postContent}`)
        );
            resolve();
        });
    };

    function addPost(newPost){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                posts.push(newPost);
                resolve();
            },5000);

        });
    };

    async function manegePost() {
        try{
            await listPost(true);
            console.log('yeni post sıralanıyor ...');
            await addPost({postTitle:'alıştırma', postContent:'node js'});
            await listPost();
        } catch (error){
            console.log('veriler alınamadı');
        }
        
    };

    manegePost();