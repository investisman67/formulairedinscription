document.getElementById('preinscription-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let session = document.getElementById('session').value;
  let price = document.querySelector('input[name="price"]:checked').value;
  let payment = document.getElementById('payment').value;
  let message = `Préinscription à la session : ${session}\nPrix : ${price} FCFA\nMoyen de paiement : ${payment}`;
  let whatsappLink = `https://wa.me/message/DJNWKADUL744A1/?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappLink;
});
