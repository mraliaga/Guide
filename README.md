# Vite

- Klasik react uygulamalarina gore daha guncel olan bu method sayesinde daha hizli sekilde uygulama olusturup ayaga kaldiririz.

# Vite ile olusturulan react uygulamasi && Klasik react uygulamasi #npxcrp

- Vite ile olusturulan bir proje klassik react uygulamasina gore kullanmadigimiz bagimliliklari icermediginden cok daha hizli sekilde olusturulur.Bunun yaninda klassik react uygulamasina gore daha performansli calisir.Built islemide klassik uygulamaya gore cok daha hizlidir.

- HMR: Vite projesinin degisiklikleri tarayiciya cok daha hizli bir sekilde aktarmasini saglar.

# Json server

- bir proje temel olarak 2 kisimdan olusur
  i) - forntend
  ii) -backend

- proje gelistirirken api istek atar verileri alir bu verilerle arayuz olustururuz.Fakat elimizde bir apiin bulunmadigi yada apiin hazirlanmasinin uzun surecegi durumlarda sanki bir api a sahibiz gibi gelistirme yapmamiza olanak saglayan bir kutuphane mevcuttur.`json-server` kutuphanesi sayesinde tek bir api elde ederiz.

- Bu dake api olusturulurken `npm install json-server` kut projemize indirilir ve sonrasinda proje klasorunde `db.json ` dosyasi olusturulur.Burada onemli kisim bu dosyanin src klasoru ile ayni dizinde olmasidir.

- Bu `db.json` dosyasi icerisinde veriler olusturulur
- ` npx son-server db.json` komutuyla ilgili fake api ayaga kaldirilir.

# HTTP METODLARI

- Server ve client arasinda veri alis verisi saglamak icin kullanilir.

1-) GET:

- Serverden verileri almak icin kullanilir

2-) POST:

- Servere veri gondermek icin kullanilir.Gonderilecek veriler istegin bodysi icerisine eklenir.

3-) PUT:

- Serverdeki 1 veriyi guncellemek icin kullanilir.Bu metod veriyi tamamen guncellemek icin kullanilir.

4-) PATH:

- Serverdeki veriyi guncellemek icin kullanilir.Bu metod verinin sadece bir kismini guncellemek icin kullanilir.

5-) DELETE:

- Serverdeki veriyi silmek icin kullanilir.

# Axios:

- Guncel projelerin buyuk bir cogunlugunda kullanilan axios kutuphanesi bizim icin apiye istek atdigimiz anda buyuk kolayliklar saglar.

- Gelen istegin jsondan js nesnesine cevrilmesi islemine axios yapar
- gonderilecek istegin bodysinde yer alacak verinin jsona cevrilme islemini yine axios yapar.
- Parametreleri isler.
- Istekleri zamana bagli kontrol ozelligi eklememizi saglar.
- Uzun uzun url yazmak yerine bu urlleri ozellestirme yetenegi sunar.
# Guide
