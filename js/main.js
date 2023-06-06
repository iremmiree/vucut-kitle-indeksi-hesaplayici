const kiloEl = document.querySelector(".kilo")
const lengthEl = document.querySelector(".length")
const btn = document.querySelector(".btn")
const result = document.querySelector(".result-text")
const resultDiv = document.querySelector(".result")
const resultValue = document.querySelector(".result-value")
const resultStatus = document.querySelector(".result-status")
const explanationText = document.querySelector(".exp-box")

btn.addEventListener("click", ()=>{
    bmiStatus()
})

function bmiStatus(){

    let bmi = (kiloEl.value / ((lengthEl.value/100)*(lengthEl.value/100)))
    bmi=`${parseFloat(bmi.toFixed(2))}`

    if(lengthEl.value == 0 || kiloEl.value == 0 || lengthEl.value == " " || kiloEl.value == " "){
        alert("BİR DEĞER GİRİNİZ.(0'dan farklı)")
    }else{
        resultDiv.style.display="flex"

            if (bmi<18.5){
                resultValue.textContent=bmi
                resultStatus.textContent="Zayıf"

                explanationText.innerHTML=
                    `<ul>
                    <li>Boyunuzu ${lengthEl.value} cm, kilonuzu ${kiloEl.value} kg olarak belirttiniz.</li>
                    <li>Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${bmi} kg/m² olarak hesaplandı.</li>
                    <li>VKİ değerinize göre tıbben ZAYIF kategorisindesiniz.</li>
                    <li>Sağlıklı bir şekilde ideal kilonuza ulaşabilmeniz için lütfen bir kliniğe başvurunuz.</li>
                    </ul>
                    `
                
            }else if(bmi<25){
                resultValue.textContent=bmi
                resultStatus.textContent="Normal"

                explanationText.innerHTML=
                    `<ul>
                    <li>Boyunuzu ${lengthEl.value} cm, kilonuzu ${kiloEl.value} kg olarak belirttiniz.</li>
                    <li>Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${bmi} kg/m² olarak hesaplandı.</li>
                    <li>VKİ değerinize göre tıbben NORMAL kategorisindesiniz.</li>
                    <li>Mevcut koşullarda kilonuzla ilgili bir sağlık sorununuz olması beklenmiyor.</li>
                    <li>Sizi tebrik ediyor, bundan sonraki yaşamınızda da formunuzu korumanızı diliyoruz.</li>
                    </ul>
                    </ul>
                    `
            }else if(bmi<30.0){
                resultValue.textContent=bmi
                resultStatus.textContent="Kilolu"

                explanationText.innerHTML=
                    `<ul>
                    <li>Boyunuzu ${lengthEl.value} cm, kilonuzu ${kiloEl.value} kg olarak belirttiniz.</li>
                    <li>Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${bmi} kg/m² olarak hesaplandı.</li>
                    <li>VKİ değerinize göre tıbben KİLOLU kategorisindesiniz.</li>
                    <li>Size medikal tedavi öneriyoruz. Diyet ve Egzersiz yaparak zayıflayabilirsiniz.</li>
                    <li>Sağlıklı bir şekilde ideal kilonuza ulaşabilmeniz için lütfen bir kliniğe başvurunuz.</li>
                    </ul>
                    `
            }else if(bmi<35.0){
                resultValue.textContent=bmi
                resultStatus.textContent="1.derece Obezite"

                explanationText.innerHTML=
                    `<ul>
                    <li>Boyunuzu ${lengthEl.value} cm, kilonuzu ${kiloEl.value} kg olarak belirttiniz.</li>
                    <li>Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${bmi} kg/m² olarak hesaplandı.</li>
                    <li>VKİ değerinize göre tıbben 1.DERECE OBEZİTE kategorisindesiniz.</li>
                    <li>Size medikal tedavi öneriyoruz. Diyet ve Egzersiz yaparak zayıflayabilirsiniz.</li>
                    <li>Sağlıklı bir şekilde ideal kilonuza ulaşabilmeniz için lütfen bir kliniğe başvurunuz.</li>
                    </ul>
                    `
            }else{
                resultValue.textContent=bmi
                resultStatus.textContent="2.derece Obezite"

                explanationText.innerHTML=
                    `<ul>
                    <li>Boyunuzu ${lengthEl.value} cm, kilonuzu ${kiloEl.value} kg olarak belirttiniz.</li>
                    <li>Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${bmi} kg/m² olarak hesaplandı.</li>
                    <li>VKİ değerinize göre tıbben 2.DERECE OBEZİTE kategorisindesiniz.</li>
                    <li>Size obezite cerrahisi öneriyoruz. Ameliyat olarak sağlıklı bir şekilde zayıflayabilirsiniz.</li>
                    <li>Tedavi için lütfen obezite cerrahisi uygulanan bir Genel Cerrahi Kliniğine başvurunuz.</li>
                    </ul>
                    `
            }
    }
}
