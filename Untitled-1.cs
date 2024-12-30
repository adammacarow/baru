// If sederhana
int nilai = 75;
if (nilai >= 75)
{
    Console.WriteLine("Anda Lulus!");
}

// If-else
int umur = 17;
if (umur >= 17)
{
    Console.WriteLine("Boleh membuat SIM");
}
else 
{
    Console.WriteLine("Belum boleh membuat SIM");
}

// If-else if-else
int nilai = 85;
if (nilai >= 90)
{
    Console.WriteLine("Nilai A");
}
else if (nilai >= 80)
{
    Console.WriteLine("Nilai B");
}
else if (nilai >= 70)
{
    Console.WriteLine("Nilai C");
}
else
{
    Console.WriteLine("Nilai D");
}

// If dengan operator logika AND (&&)
int usia = 25;
bool memilikiKTP = true;
if (usia >= 17 && memilikiKTP)
{
    Console.WriteLine("Bisa membuat SIM");
}

// If dengan operator logika OR (||)
bool hujan = true;
bool banjir = false;
if (hujan || banjir)
{
    Console.WriteLine("Sebaiknya bawa payung");
}