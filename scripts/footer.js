const html = `

  <section class="max-width-magin-auto">
    <h2 style="color: var(--primary-color)">Services</h2>
    <ul>
      <li><a href="../about.html">About us</a></li>
      <li><a href="../contact.html">Contact</a></li>
      <li><a href="../privacy-policy.html">Privacy Policy</a></li>
    </ul>
    <section class="footer__links-cont">
      <p>&copy; Copyright <a href="/index.html">Bloggit</a></p>
      <div class="footer__socials-cont">
        <div class="fb-icon">
          <a href="https://www.facebook.com/p/bloggit-61568425943202/"><img src="../styles/facebook-f.svg" alt="" /></a>
        </div>
        <div class="tweet-icon">
          <a href="https://x.com/bloggit?t=FxZcKVg-MgWdDuoiSuTpQg&s=08"><img src="../styles/twitter-alt.svg" alt="" /></a>
        </div>
        <div class="ig-icon">
          <a href="https://www.instagram.com/bloggit01/profilecard/?igsh=MXNpN3hiZ29ibHNhMw=="><img src="../styles/icons8-instagram-50.png" alt="" /></a>
        </div>
      </div>
     <a href="#">
      <button class="btt-button">Back to top</button>
    </a>
    </section>
  </section>
`;

document.querySelector(".js-footer").innerHTML = html;
// setTimeout(() => console.clear(), 1000);
