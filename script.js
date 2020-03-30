function HitungBMI()
          {
               var Berat, Tinggi, BMI, BMIfixed, grade, Nama1, Nama2, Namagrade, Hai, BMIideal, Turun1, Turun2, Turun2fixed, Turun2if;

               Nama1 = document.getElementById("nama").value;
               Berat = document.getElementById("berat").value;
               Tinggi = document.getElementById("tinggi").value;
               BMI = Berat/((Tinggi/100)*(Tinggi/100));
               BMIfixed = BMI.toFixed(2);

               BMIideal = 22.9
               Turun1 = BMIideal * ((Tinggi/100)*(Tinggi/100));
               Turun2 = Berat - Turun1;
               Turun2fixed = Turun2.toFixed(2)

               Turun2if = "";

               if(BMIfixed > 22.9) Turun2if = Turun2fixed
               else Turun2if = 0;
               
               document.getElementById("Turun").value = Turun2if;

               Hai = "Hai ";
               Nama2 = Nama1 + ", nilai BMI kamu = " + BMIfixed + ". "

               grade = "";

               if(BMIfixed < 18.5) grade = "Berat badan kamu kurang, makan lagi yang banyak !!!"
               else if(BMIfixed < 22.9) grade = "Berat badan kamu normal, bagus pertahankan !!!"
               else if(BMIfixed < 29.9) grade = "Berat badan kamu cenderung obesitas, ayo mulai kurangi ngemil !!!"
               else grade = "Berat badan kamu obesitas, ayo mulai program diet dari sekarang !!!";

               Namagrade = Hai + Nama2 + grade
               if(Nama1 !== "" && Berat !== "" && Tinggi !== "") 
               alert(`${Namagrade}`)
               else alert('Data yang kamu isi gak lengkap !');            
          }  

function hanyaAngka(evt) 
          {
		  var charCode = (evt.which) ? evt.which : event.keyCode
		   if (charCode > 31 && (charCode < 48 || charCode > 57))
 
		    return false;
		  return true;
		}
