<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Contact form</title>
    <meta name="description" content="Formulaire de contact">
    <link rel="stylesheet" href="../styles/main.css">
  </head>
  <body>
    <?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    if(isset($_POST['send']))
    {


        require 'vendor/phpmailer/phpmailer/src/Exception.php';
        require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
        require 'vendor/phpmailer/phpmailer/src/SMTP.php';

        // a parametrer
        $email = 'tweakshadow@gmail.com';//email d'envoi
        $password = 'lapinchat';// mdp
        $smtp = 'smtp.gmail.com';//serveur d'envoi
        $to_email = 'tweakshadow@gmail.com';//adresse email à qui envoyer le mail.


        $to_id = $email;
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $naissance = $_POST['naissance'];
        $toid = $_POST['toid'];
        $talent = $_POST['talent'];
        $choisir = $_POST['choisir'];
        $annee = $_POST['annee'];


        // $message = $_POST['message'];
        // $subject = $_POST['subject'].' de '.$_POST['toid'];

        $mail = new PHPMailer;
        $mail->isSMTP();
        //$mail->SMTPDebug = 4;
        $mail->SetFrom($email);
        $mail->Host = $smtp;
        $mail->Port = 587;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        $mail->Username = $email;
        $mail->Password = $password;
        $mail->addAddress();
        $mail->Subject = "Recuretement";
        $mail->msgHTML("Nom : ".$firstname."<br>" "Prenom : ".$lastname."<br>""date de naissance : ".$naissance."<br>""Adresse mail : ".$toid."<br>""Les instruments joués : ".$talent."<br>""choeur : ".$choisir."<br>""nombre d'année de pratique : ".$annee."<br>");
        if (!$mail->send(  )) {
        $error = "Mailer Error: " . $mail->ErrorInfo;
        echo '<p id="para">'.$error.'</p>';
        }
        else {
        echo '<p id="para">Message sent!</p>';
        }
    }
    else {
      ?>

    <form action="index.php" method="post">
      <!-- <input type="text" placeholder="Votre email" name="toid"/> -->
      <!-- <input type="text" placeholder="Sujet de votre mail" name="subject"/> -->
      <!-- <textarea rows="4" cols="50" placeholder="Votre message" name="message"></textarea> -->
      <!-- <input type="submit" value="Send" name="send"/> -->
    </form>
  <?php } ?>
    <div  class="fleche ">
      <a href="#ancrerecrutement"     ><img src="https://static.wixstatic.com/media/a17bb5_1187a76acd6646cdb3651b3fc86c6087~mv2.gif" alt=""></a></div>
    <nav>
        <img src="../images/groupe.jpg" class="groupe"alt="">
        <a href="../pages/accueil.html#ancrebio" title="Accueil">Accueil</a>
        <a href="../pages/concert.html#ancreconcert" title="concerts">Concerts</a>
        <a href="../pages/recrutement.html" title="Recrutement"class="Recrutement">Recrutement</a>
        <a href="../pages/accueil.html#ancremusique" title="Recrutement">Musiques</a>
        <a href="#mail" title="coord">Coordonnée</a>
    </nav>
    <div  class="flech ">
      <a href="#ancrerecrutement"     ><img src="https://static.wixstatic.com/media/a17bb5_1187a76acd6646cdb3651b3fc86c6087~mv2.gif" alt=""></a></div>
    <a href="../index.html" title="concerts"><img src="../images/murf.jpg"class="murf" alt=""></a>
    <div class="carre4">
      <div class="tiretbio4">
        <div class="tiret7"></div>
        <div  id="ancrerecrutement" ><p>R E C R U T E M E N T</p></div>
        <div class="tiret8"></div>
      </div>
      <div class="container">
    <div class="centersubmit">
    <h1>Formulaire de recrutement</h1>
    </div
  <form action="/action_page.php">
    <label for="fname">Nom</label>
    <input type="text" id="fname" name="firstname" placeholder="Nom">
    <label for="fprenom">Prénom</label>
    <input type="text" id="fprenom" name="lastname" placeholder="Prenom">
    <label for="naissance">Date de naissance</label>
    <input type="date" id="naissance" name="naissance" placeholder="">
    <label for="emailAddress">Email</label>
    <input id="emailAddress" type="email" name="toid" placeholder="Votre email">

     <div class="flex">
    <p>Instrument souhaité :</p>
    <input type="checkbox" name="talent"value="guitare">
    <label for="inf">Guitare électrique</label>
    <input type="checkbox" name="talent"value="basse">
    <label for="basse">Basse</label>
    <input type="checkbox" name="talent"value="batterie">
    <label for="batterie">Batterie/percussions</label>
    <input type="checkbox" name="talent"value="violon">
    <label for="violon">Violon/violoncelle</label>
    <input type="checkbox" name="talent"value="contrebasse">
    <label for="contrebasse">Contrebasse</label>
    <p>Chœurs :</p>
     <input type="radio" name="choisir"value="oui"id="oui">
     <label for="oui">Oui</label>
     <input type="radio" name="choisir"value="non"id="non">
     <label for="non">Non</label>
    </div>
    <br><label for="annee">Nombre d’année de pratique :</label>
    <input type="number" step="8" value="0" min="0" max="100"name="annee"id="annee"value="annee">



    <div class="centersubmit">


    <input type="submit" value="Envoyer" name="send"">
    </div>
  </form>
</div>




    </div>
    <footer>
      <a href="https://privacy.umusic.com/terms/"class="policy">Terms & conditions</a>
      <a href="https://privacy.umusic.com/">privacy policy</a>
      <div id="mail"><p>Mail : lyneetoile100@hotmail.fr</p></div>
    </footer>
  <script src="../scripts/coordonees.js"></script>
  </body>
</html>
