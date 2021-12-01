var body = document.querySelector("body");
body.addEventListener("load", loadPersonalInfo());

function loadPersonalInfo() {
  let req = new XMLHttpRequest();

  req.onload = function () {
    let data = JSON.parse(this.responseText);
    let perfilSection = `
                    <div>
                    <img
                        id="picGuilherme"
                        src="${data.avatar_url}"
                        alt="foto perfil"
                    />
                    <div class="personalContainer">
                        <h2>${data.name} <br> (${data.login})</h2>
                        <div id="personalTextContainer">
                        <p>
                            <strong>Sobre mim:</strong>
                            ${data.bio}
                        </p>
                        <div id="git-stats">
                            <a target="_blank" href="${data.html_url}">
                                <img src="https://github-readme-stats.vercel.app/api?username=GuilhermeCoelhoFB&show_icons=true&theme=dark&include_all_commits=true&count_private=true"/>
                            </a>
                        </div>
                        <div class="socialTextContainer">
                            <h3>Redes Sociais</h3>
                            <div id="socialContainer">
                            <a
                                target="_blank"
                                href="${data.html_url}"
                                ><img
                                class="socialImg"
                                src="img/github-svgrepo-com.svg"
                                alt=""
                            /></a>
                            <a
                                target="_blank"
                                href="${data.blog}"
                                ><img
                                class="socialImg"
                                src="img/linkedin-svgrepo-com.svg"
                                alt=""
                            /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    `;
    document.getElementById("personal").innerHTML = perfilSection;
  };

  req.onerror = function () {
    alert(`Erro na request, error: "  ${this.status} - ${this.statusText} `);
  };
  req.open("GET", "https://api.github.com/users/GuilhermeCoelhoFB");
  req.send();
}
