const fs = require('fs');
//1. aşama dosya oluşturma
fs.writeFile('makedirection.json',' {"name": "Employee 1 Name", "salary": 2000}','utf8',(err)=>{
    if (err) console.log(err);
})
//2. aşama dosya okuma
fs.readFile('makedirection.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Dosya okunamadı:', err);
        return; 
    }

    console.log('Dosya başarıyla okundu:', data);

    //3. aşama dosya güncelleme
    let employee;
    try {
        employee = JSON.parse(data);
    } catch (parseError) {
        console.log('JSON verisi hatalı:', parseError);
        return;
    }

    
    employee.salary = 3000; 

    // güncellme sonrası tekrar yazdırma
    fs.writeFile('makedirection.json', JSON.stringify(employee, null, 2), 'utf8', (err) => {
        if (err) {
            console.log('Dosya güncellenirken bir hata oluştu:', err);
        } else {
            console.log('Dosya başarıyla güncellendi.');
        }
    });
});
// 4. aşama dosya silme 
// fs.unlink('makedirection.json', (err) => {
//     if (err) console.log('silme işlemi gerçekleşmedi',err);
// })

// not: hepsini birlikte yaptığınızda kod doğru çalışmayabilir