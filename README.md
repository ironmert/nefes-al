# 🌬️ Nefes Al — YKS Nefes Egzersizleri

[![Canlı Uygulama](https://img.shields.io/badge/Canlı%20Uygulama-nefes.mertalidemir.com-6b46c1?style=flat-square)](https://nefes.mertalidemir.com/)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**Nefes Al**, sınava hazırlanan öğrencilerin nefes egzersizlerini görsel bir zamanlayıcıyla takip etmesi için geliştirilmiş, tarayıcıda çalışan ücretsiz bir web uygulamasıdır.

**Canlı site:** https://nefes.mertalidemir.com/

> **Yayın notu:** Bu repodaki düzeltilmiş sürüm henüz canlı siteye dağıtılmadı. Canlı sürüm ile GitHub sürümü onay ve dağıtım tamamlanana kadar farklı olabilir.

## ✨ Özellikler

- **4-7-8 egzersizi:** 4 saniye nefes al → 7 saniye tut → 8 saniye nefes ver (toplam 19 saniye).
- **Kare nefes (4-4-4-4):** 4 saniye nefes al → 4 saniye tut → 4 saniye nefes ver → 4 saniye bekle (toplam 16 saniye).
- Egzersiz aşamalarına göre renk ve boyut değiştiren animasyon.
- Saniye bazlı geri sayım, mod değişiminde animasyonun doğru şekilde yeniden başlaması.
- Tam ekran görünümü; tarayıcı engellerse kullanıcıya bilgi gösterilmesi.
- Klavye odak göstergeleri, seçili egzersiz bilgisi ve azaltılmış hareket tercihi desteği.
- Mobil ve masaüstü kullanıma uygun tasarım.

## 🛠️ Teknolojiler

HTML5 · CSS3 · Vanilla JavaScript (`requestAnimationFrame`, `performance.now`, Fullscreen API)

Herhangi bir framework, bağımlılık veya build işlemi gerektirmez.

## 🚀 Yerel çalıştırma

```bash
git clone https://github.com/ironmert/nefes-al.git
cd nefes-al
```

`index.html` dosyasını tarayıcıda aç. Repo oluşturulmadan önce yukarıdaki GitHub bağlantısı erişilebilir değildir.

## 📁 Proje yapısı

```text
nefes-al/
├── index.html    # Arayüz, açıklama ve bağlantılar
├── style.css     # Stil, mobil ve tam ekran görünümü
├── script.js     # Egzersiz döngüleri ve animasyonlar
├── .gitignore
└── README.md
```

## 🧪 Doğrulama

- JavaScript sözdizimi (`node --check script.js`).
- Egzersiz aşamaları ve sürelerinin otomatik senaryo kontrolü.
- Eski iletişim bağlantılarının güncellenmesi ve istek üzerine `© 2024 TermDigital | Tüm Hakları Saklıdır` telif satırının korunması.

**Not:** Manuel mobil/tarayıcı testleri ve canlıya dağıtım ayrıca yapılmalıdır. GitHub'a yüklemek, canlı siteyi otomatik olarak güncellemez.

## 🗺️ Sonraki geliştirmeler

- [ ] Egzersizi duraklatma / devam ettirme / sıfırlama.
- [ ] Gerçek uygulama ekran görüntüleri ve kısa demo.
- [ ] Çeşitli cihazlarda manuel erişilebilirlik ve tam ekran testleri.

## ⚠️ Bilgilendirme

Bu uygulama genel amaçlı bir nefes egzersizi aracıdır; tıbbi tanı veya tedavi sunmaz. Rahatsızlık veya baş dönmesi hissederseniz egzersizi bırakın. Nefes tutmak herkese uygun olmayabilir.

## 👨‍💻 Geliştirici

**Mertali Demir** · [Web sitesi](https://mertalidemir.com/) · [GitHub](https://github.com/ironmert) · [LinkedIn](https://www.linkedin.com/in/mertmir)

**Telif bilgisi:** Uygulamanın alt kısmındaki `© 2024 TermDigital | Tüm Hakları Saklıdır` ibaresi talep edildiği şekilde korunmuştur.

**Lisans:** Henüz açık kaynak lisansı seçilmedi. Açık erişim, otomatik olarak yeniden kullanım hakkı vermez.
