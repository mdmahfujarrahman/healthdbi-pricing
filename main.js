const agency = "./img/agency.png";
const enterprise = "./img/enterprise.png";
const startup = "./img/startup.png";
const Enterprise = "./img/startup.png";
const testingRecurring = "./img/enterprise.png";
const URL = "https://api.healthdbi.com/admin/subscription/get";
let packages = false;
let packageInfo;
const freeDemo = {
    _id: "63e3542489dfb89a44b69367",
    title: "Free Demo",
    desc: "Coming Soon: Web address URL search, Exclusion Upload, Contact profile view, Physician, Profile view, Clinic/Facility Profile view",
    type: "COMMON",
    features: [
        {
            _id: "636f49f81c0f5d0a117dfd42",
            description: "Physician Search Only",
            __v: 0,
        },
        {
            _id: "636f4a191c0f5d0a117dfd46",
            description: "NPI Number upload",
            __v: 0,
        },
        {
            _id: "636f4a261c0f5d0a117dfd57",
            description: "CSV Export",
            __v: 0,
        },
        {
            _id: "636f4a301c0f5d0a117dfd58",
            description: "Exclusion Upload",
            __v: 0,
        },
        {
            _id: "636f4a3c1c0f5d0a117dfd59",
            description: "Years of Experience",
            __v: 0,
        },
        {
            _id: "636f4a431c0f5d0a117dfd54",
            description: "Gender",
            __v: 0,
        },
        {
            _id: "636f4a4d1c0f5d0a117dfd67",
            description: "Chat & Email Support",
            __v: 0,
        },
        {
            _id: "636f4a5c1c0f5d0a117dfd61",
            description: "Create up to 5 Lists",
            __v: 0,
        },
        {
            _id: "636f4a681c0f5d0a117dfd62",
            description: "No Contract",
            __v: 0,
        },
        {
            _id: "636f4a741c0f5d0a117dfd74",
            description: "Real-Time email verification",
            __v: 0,
        },
    ],
    monthly_amount: 0,
    annually_amount: 0,
    stripe_product_id: "prod_NJlxgvFFfA7CmW",
    cost_per_credit: 0.4,
    cost_per_user: 50,
    stripe_cpc_price_id: "price_1MZ8Q2IJ6O2h2Dg7wsswlGU2",
    stripe_cpc_product_id: "prod_NJlxevIMdmndLp",
    stripe_cpu_price_id: "price_1MZ8Q2IJ6O2h2Dg7KA7kTybg",
    stripe_cpu_product_id: "prod_NJlxoqrCxGTldI",
    stripe_month_price_id: "price_1MZ8Q1IJ6O2h2Dg7Aa2DVnZB",
    stripe_annual_price_id: "price_1MZ8Q1IJ6O2h2Dg78L9f2Sxd",
    monthly_credits: 0,
    annually_credits: 10000,
    no_of_user: 1,
    homepage: true,
    disabled: false,
    createdAt: "2023-02-08T07:49:56.856Z",
    updatedAt: "2023-02-08T07:50:18.957Z",
    __v: 0,
};

const toggle = document.getElementById("toggle-switch");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");
const imageData = [startup, agency, enterprise, Enterprise, testingRecurring];

const loadData = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    packageInfo = [...data.data, freeDemo];
    let result = "";
    packageInfo
        ?.filter((item) => item.type === "COMMON" && item.homepage === true)
        .sort((a, b) => a.monthly_amount - b.monthly_amount)
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
                                    <div class="text-center card-button">
                                    ${loadfetureUrl(pack._id, pack.title)}  
                                </div>
                                    <p>${pack.desc}</p>
                                </div>
                                <div class="text-muted package-info">
                                    <ul class="list-unstyled">
                                        ${loadfetureData(pack.features)}
                                    </ul>
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

const apiUrl = (data, titles) => {
    if (titles === "Free Demo") {
        console.log("free demo");
        return `https://app.healthdbi.com/signUp`;
    } else {
        return `https://app.healthdbi.com/signUp?planId=${data}&type=${
            packages ? "year" : "month"
        }`;
    }
};

const loadfetureUrl = (data, title) => {
    let listitem = "";
    listitem += `<a target="_blank" href="${apiUrl(
        data,
        title
    )}" class="btn-one">
        Buy Now
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
            .sort((a, b) => a.annually_amount - b.annually_amount)
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
                                    <div class="text-center card-button">
                                        ${loadfetureUrl(
                                            pack._id,
                                            pack.title
                                        )}   
                                    </div>
                                    <p>${pack.desc}</p>
                                    
                                </div>
                                <div class="text-muted package-info">
                                    <ul class="list-unstyled">
                                        ${loadfetureData(pack.features)}
                                    </ul>
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
            .sort((a, b) => a.monthly_amount - b.monthly_amount)
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
                                    <div class="text-center card-button">
                                    ${loadfetureUrl(pack._id, pack.title)}  
                                    </div>
                                    <p>${pack.desc}</p>
                                </div>
                                <div class="text-muted package-info">
                                    <ul class="list-unstyled">
                                        ${loadfetureData(pack.features)}
                                    </ul>
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

window.load(function () {
    $(window).css("overflow", "hidden");
    $("#loading").fadeOut(1000, function () {
        $(window).css("overflow", "auto");
    });
});
