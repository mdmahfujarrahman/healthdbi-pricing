const agency = "./img/agency.png";
const enterprise = "./img/enterprise.png";
const startup = "./img/startup.png";
const Enterprise = "./img/startup.png";
const testingRecurring = "./img/enterprise.png";
const URL = "https://api.healthdbi.com/admin/subscription/get";
let packages = false;
let packageInfo;

const toggle = document.getElementById("toggle-switch");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");
const imageData = [startup, agency, enterprise, Enterprise, testingRecurring];

const loadData = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data.data);
    packageInfo = data.data;
    let result = "";
    packageInfo
        .filter((item) => item.type === "COMMON" && item.homepage === true)
        .map((pack, index) => {
            const packagesImage = imageData[index];
            result += `<div class="col-12 col-md-6 col-lg-4 mb-5 mb-md-1 mb-lg-2">
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
                                    <span>$ ${pack.monthly_amount}</span>
                                    <p>${pack.desc}</p>
                                </div>
                                <div class="text-muted package-info">
                                    <ul class="list-unstyled">
                                        ${loadfetureData(pack.features)}
                                    </ul>
                                </div>
                                <div class="text-center card-button">
                                    ${loadfetureUrl(pack._id)}   
                                </div>
                            </div>
                        </div>
            </div>`;
        });
    monthly.innerHTML = result;
};

loadData();

const loadfetureData = (data) => {
    let listitem = "";
    data.map((item) => {
        listitem += `<li>
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
                        <span>${item.description}</span>
                    </li>`;
    });
    return listitem;
};
const loadfetureUrl = (data) => {
    let listitem = "";
    listitem += `<a target="_blank" href="https://app.healthdbi.com/signUp?planId=${data}&type=${
        packages ? "year" : "month"
    }" class="btn-one">
        View Details
        </a>`;
    return listitem;
};

console.log(packages);

toggle.onclick = function () {
    packages = toggle.checked;
    let result = "";
    if (packages) {
        packageInfo
            .filter((item) => item.type === "COMMON" && item.homepage === true)
            .map((pack, index) => {
                const packagesImage = imageData[index];
                result += `<div class="col-12 col-md-6 col-lg-4 mb-5 mb-md-1 mb-lg-2">
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
                                    <span>$${pack.annually_amount}</span>
                                    <p>${pack.desc}</p>
                                </div>
                                <div class="text-muted package-info">
                                    <ul class="list-unstyled">
                                        ${loadfetureData(pack.features)}
                                    </ul>
                                </div>
                                <div class="text-center card-button">
                                ${loadfetureUrl(pack._id)}   
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
        packageInfo
            .filter((item) => item.type === "COMMON" && item.homepage === true)
            .map((pack, index) => {
                const packagesImage = imageData[index];
                result += `<div class="col-12 col-md-6 col-lg-4 mb-5 mb-md-1 mb-lg-2">
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
                                    <span>$ ${pack.monthly_amount}</span>
                                    <p>${pack.desc}</p>
                                </div>
                                <div class="text-muted package-info">
                                    <ul class="list-unstyled">
                                        ${loadfetureData(pack.features)}
                                    </ul>
                                </div>
                                <div class="text-center card-button">
                                    ${loadfetureUrl(pack._id)}   
                                </div>
                            </div>
                        </div>
            </div>`;
            });
        monthly.innerHTML = result;
        monthly.classList.remove("d-none");
        yearly.classList.add("d-none");
    }
};

$(window).load(function () {
    $(window).css("overflow", "hidden");
    $("#loading").fadeOut(1000, function () {
        $(window).css("overflow", "auto");
    });
});
