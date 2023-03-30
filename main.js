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
    title: "Free Trial",
    desc: "Coming Soon: Web address URL search, Exclusion Upload, Contact profile view, Physician, Profile view, Clinic/Facility Profile view",
    type: "COMMON",
    features: [
        {
            _id: "636f49f81c0f5d0a117dfd42",
            description: "Everything in Growth Plan",
            __v: 0,
        },
        {
            _id: "636f4a191c0f5d0a117dfd46",
            description: "5 free credits",
            __v: 0,
        },
        {
            _id: "636f4a261c0f5d0a117dfd57",
            description: "7 days",
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
    monthly_credits: "5 Free",
    annually_credits: "5 Free",
    no_of_user: 1,
    homepage: true,
    disabled: false,
    createdAt: "2023-02-08T07:49:56.856Z",
    updatedAt: "2023-02-08T07:50:18.957Z",
    __v: 0,
};

const ProfessionalData = [
    "Physician Search Only",
    "NPI Number upload",
    "CSV Export",
    "Exclusion Upload",
    "Real-Time email verification",
    "Single user Account",
    "Search by State License",
    "Gender & Experience",
    "Create up to 5 Lists",
    "Chat & Email Support",
    "Additional Credit $0.40/contact",
    "Single User Account",
];

const GrowthData = [
    "Executives & Physician Search",
    "NPI Number upload",
    "CSV Export",
    "Exclusion Upload",
    "Real-Time email verification",
    "Company Admin & Team Management",
    "Search by State License",
    "Facility Type Filter",
    "Create Lists Unlimited",
    "Chat & Email Support",
    "Additional Credit $0.25/contact",
    "Additional User $50/month/User",
    "2 users on Annual (inclusive)",
];

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
                                <div class="card-title">
                                    <h5>${pack.title}</h5>
                                    <span>$ ${pack.monthly_amount}</span>
                                    <div class="text-center card-button">
                                    ${loadfetureUrl(pack._id, pack.title)}  
                                </div>
                                    <h5>${pack.monthly_credits} Credits</h5>
                                </div>
                                <div class="text-muted package-info">
                                    <ul class="list-unstyled">
                                        ${loadfetureData(
                                            pack.features,
                                            pack.title
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
            </div>`;
        });
    monthly.innerHTML = result;
};

loadData();

const loadfetureData = (data, type) => {
    let listitem = "";
    if (type === "Free Trial") {
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
    } else if (type === "Professional") {
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
                        <span>Physician Search Only</span>
                    </li>
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
                        <span>NPI Number upload</span>
                    </li>
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
                        <span>CSV Export"</span>
                    </li>
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
                        <span>Exclusion Upload"</span>
                    </li>
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
                        <span class="fontBold">Real-Time email verification</span>
                    </li>
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
                        <span>Single user Account</span>
                    </li>
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
                        <span>Search by State License</span>
                    </li>
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
                        <span>Gender & Experience</span>
                    </li>
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
                        <span>Create up to 5 Lists</span>
                    </li>
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
                        <span>Chat & Email Support</span>
                    </li>
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
                        <span>Additional Credit $0.40/contact"</span>
                    </li>
    `;
    } else if (type === "Growth") {
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
                        <span class="fontBold">Executives & Physician Search</span>
                    </li>
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
                        <span>NPI Number upload</span>
                    </li>
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
                        <span>CSV Export"</span>
                    </li>
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
                        <span>Exclusion Upload"</span>
                    </li>
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
                        <span class="fontBold">Real-Time email verification</span>
                    </li>
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
                        <span class="fontBold">Company Admin & Team Management</span>
                    </li>
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
                        <span>Search by State License</span>
                    </li>
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
                        <span class="fontBold">Facility Type Filter</span>
                    </li>
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
                        <span class="fontBold">Create Lists Unlimited</span>
                    </li>
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
                        <span>Chat & Email Support</span>
                    </li>
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
                        <span class="fontBold">Additional Credit $0.25/contact</span>
                    </li>
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
                        <span>Additional User $50/month/User</span>
                    </li>
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
                        <span class="fontBold">2 users on Annual (inclusive)</span>
                    </li>
                    `;
    }
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
                                <div class="card-title">
                                    <h5>${pack.title}</h5>
                                    <span>$${pack.annually_amount}</span>
                                    <div class="text-center card-button">
                                        ${loadfetureUrl(
                                            pack._id,
                                            pack.title
                                        )}   
                                    </div>
                                    <h5>${pack.annually_credits} Credits</h5>
                                </div>
                                <div class="text-muted package-info">
                                    <ul class="list-unstyled">
                                        ${loadfetureData(
                                            pack.features,
                                            pack.title
                                        )}
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
                                <div class="card-title">
                                    <h5>${pack.title}</h5>
                                    <span>$ ${pack.monthly_amount}</span>
                                    <div class="text-center card-button">
                                    ${loadfetureUrl(pack._id, pack.title)}  
                                    </div>
                                    <h5>${pack.monthly_credits} Credits</h5>
                                </div>
                                <div class="text-muted package-info">
                                    <ul class="list-unstyled">
                                        ${loadfetureData(
                                            pack.features,
                                            pack.title
                                        )}
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
