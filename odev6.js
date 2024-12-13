const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if (ctx.path === '/') {
        ctx.status = 200;
        ctx.body = 'index sayfasina hosgeldiniz :)';
    } else if (ctx.path === '/hakkimda') {
        ctx.status = 200;
        ctx.body = 'hakkımda sayfasina hosgeldiniz :)';
    } else if (ctx.path === '/iletisim') {
        ctx.status = 200;
        ctx.body = 'iletisim sayfasina hosgeldiniz :)';
    } else {
        ctx.status = 404;
        ctx.body = 'SAYFA BULUNAMADI :(';
    }
});

const port = 5000;

app.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
});
