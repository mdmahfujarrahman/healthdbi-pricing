const agency = "./img/agency.png"
const enterprise = './img/enterprise.png'
const startup = './img/startup.png'
const URL = "https://api.healthdbi.com/admin/subscription/get";
let packages = false;
let packageInfo;

const toggle = document.getElementById("toggle-switch")
const monthly = document.getElementById("monthly")
const yearly = document.getElementById("yearly");
const imageData = [startup, agency, enterprise];

const loadData = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    packageInfo = data.data;
    let result = "";
    packageInfo.map((pack, index) => {
        const packagesImage = imageData[index];
        result += `<div class="col-12 col-md-6 col-lg-4 mb-5 mb-md-0 mb-lg-0">
                        <div
                            class="card border-0 animate__animated animate__ animate__fadeInUp"
                            data-wow-delay=".2s"
                            style="
                                visibility: visible;
                                animation-delay: 0.2s;
                                animation-name: fadeInUp;
                            "
                        >
                            <div class="card-body">
                                <div class="card-img">
                                    <img
                                        src=${packagesImage}
                                        alt="startup"
                                    />
                                </div>
                                <div class="card-title">
                                    <h5>${pack.title}</h5>
                                    <span>${pack.monthly_amount}</span>
                                    <p>${pack.desc}</p>
                                </div>
                                <div class="text-muted package-info">
                                    <ul class="list-unstyled">
                                        <li>
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>limited space access</span>
                                        </li>
                                        <li class="my-2">
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Secuirty facility</span>
                                        </li>
                                        <li class="my-2">
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Event support</span>
                                        </li>
                                        <li class="my-2">
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Decoration design</span>
                                        </li>
                                        <li class="my-2">
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Per day bill</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="text-center card-button">
                                    <a href="#" class="btn-one">
                                        View Details
                                    </a>
                                    <a href="#" class="btn-two">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
            </div>`;
    });
    monthly.innerHTML = result;
};

loadData();


toggle.onclick = function () {
    packages = toggle.checked;
    let result = "";
    if (packages) {
        packageInfo.map((pack, index) => {
            const packagesImage = imageData[index];
            result += `<div class="col-12 col-md-6 col-lg-4 mb-5 mb-md-0 mb-lg-0">
                        <div
                            class="card border-0 animate__animated animate__ animate__fadeInUp"
                            data-wow-delay=".2s"
                            style="
                                visibility: visible;
                                animation-delay: 0.2s;
                                animation-name: fadeInUp;
                            "
                        >
                            <div class="card-body">
                                <div class="card-img">
                                    <img
                                        src=${packagesImage}
                                        alt="startup"
                                    />
                                </div>
                                <div class="card-title">
                                    <h5>${pack.title}</h5>
                                    <span>${pack.annually_amount}</span>
                                    <p>${pack.desc}</p>
                                </div>
                                <div class="text-muted package-info">
                                    <ul class="list-unstyled">
                                        <li>
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>limited space access</span>
                                        </li>
                                        <li class="my-2">
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Secuirty facility</span>
                                        </li>
                                        <li class="my-2">
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Event support</span>
                                        </li>
                                        <li class="my-2">
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Decoration design</span>
                                        </li>
                                        <li class="my-2">
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Per day bill</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="text-center card-button">
                                    <a href="#" class="btn-one">
                                        View Details
                                    </a>
                                    <a href="#" class="btn-two">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
            </div>`;
        });
        yearly.innerHTML = result;
        monthly.classList.add("d-none");
        yearly.classList.remove("d-none");
    } else {
        let result = "";
        packageInfo.map((pack, index) => {
            const packagesImage = imageData[index];
            result += `<div class="col-12 col-md-6 col-lg-4 mb-5 mb-md-0 mb-lg-0">
                        <div
                            class="card border-0 animate__animated animate__ animate__fadeInUp"
                            data-wow-delay=".2s"
                            style="
                                visibility: visible;
                                animation-delay: 0.2s;
                                animation-name: fadeInUp;
                            "
                        >
                            <div class="card-body">
                                <div class="card-img">
                                    <img
                                        src=${packagesImage}
                                        alt="startup"
                                    />
                                </div>
                                <div class="card-title">
                                    <h5>${pack.title}</h5>
                                    <span>${pack.monthly_amount}</span>
                                    <p>${pack.desc}</p>
                                </div>
                                <div class="text-muted package-info">
                                    <ul class="list-unstyled">
                                        <li>
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>limited space access</span>
                                        </li>
                                        <li class="my-2">
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Secuirty facility</span>
                                        </li>
                                        <li class="my-2">
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Event support</span>
                                        </li>
                                        <li class="my-2">
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Decoration design</span>
                                        </li>
                                        <li class="my-2">
                                            <svg
                                                class="w-6 h-6 stroke_color"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Per day bill</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="text-center card-button">
                                    <a href="#" class="btn-one">
                                        View Details
                                    </a>
                                    <a href="#" class="btn-two">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
            </div>`;
        });
        monthly.innerHTML = result;
        monthly.classList.remove("d-none");
        yearly.classList.add("d-none");
    }
}
