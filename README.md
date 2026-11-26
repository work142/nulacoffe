KURULUM
1) console.firebase.google.com: proje aç, Firestore Database oluştur, Authentication > Sign-in method > Google'ı aç.
2) Proje ayarları > Web uygulaması ekle, çıkan değerleri config.js içine yaz.
3) Firestore'da "staff" koleksiyonu aç: belge kimliği = kendi Gmail adresin (küçük harf), alan: role = admin
4) npm i -g firebase-tools, firebase login, firebase use --add (projeyi seç), firebase deploy
5) Authentication > Settings > Authorized domains listesine yayın adresini ekle.
Adresler: / müşteri sitesi, /kasa, /yonetim
Sonra /yonetim'den kategori, ürün, kampanya, tema ve teslimat ayarlarını gir; kasa personelini "Personel" bölümünden ekle.
