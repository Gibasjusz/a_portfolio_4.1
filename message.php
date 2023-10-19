<?php
    

    $imie = $_POST["dane1"];
    $contact = $_POST["dane2"];
    $why = $_POST["dane3"];

    $id_polaczenia = mysqli_connect('localhost', 'root', '', 'gibimail');
    $zapytanie = "INSERT INTO dane (id, imie_nazwisko, kontakt, powod) VALUES ('' ,'$imie', '$contact', '$why')";

    if(mysqli_query($id_polaczenia, $zapytanie)){
        echo "<h3>data stored in a database successfully."
            . " Please browse your localhost php my admin"
            . " to view the updated data</h3>"; 
    } else{
        echo "ERROR: Hush! Sorry"
            . mysqli_error($id_polaczenia);
    }
     
    // Close connection
    mysqli_close($id_polaczenia);
?>