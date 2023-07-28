export const getStaticPage = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <script src="https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            "primary": '#350E5F',
                            "primary-50": '#350e5f0D',
                            "secondary": '#9E4AD1',
                            "secondary-100": 'rgba(158, 74, 209, 0.10)',
                        }
                    }
                }
            }
        </script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Roboto', sans-serif;
            }

            .p-headx {
                font-size: 2.5rem;
            }

            .p-head {
                font-size: 2rem;
            }

            .p-subhead {
                font-size: 1.5rem;
            }

            .card-title {
                color: rgba(0, 0, 0, 0.50);
                margin-top: 1.25rem;
                margin-bottom: 0.5rem;
                font-weight: 500;
            }

            .card {
                border-radius: 10px;
                border: 1px solid rgba(0, 0, 0, 0.10);
                background: #FFF;
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
                padding: 1rem;
            }
        </style>
    </head>

    <body>
        <div aria-label="main" class="w-[950px] m-auto mt-[10px] pb-[100px]">
            <div aria-label="header flex" class="flex gap-4">
                <div aria-label="profile-and-name" class="flex items-center gap-5 flex-[4]">
                    <div aria-label="image-wrapper" class="relative w-[125px] h-[125px] rounded-full">
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="profile pic" class="w-[125px] h-[125px] rounded-full object-cover">

                        <svg class="absolute bottom-[2px] right-[2px]" aria-label="verified-badge" width="30" height="30"
                            viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.144531" y="0.917969" width="11.6719" height="11.6719" rx="5.83597" fill="white" />
                            <path
                                d="M5.98485 2.91797C6.28359 2.91799 6.57209 3.02681 6.79642 3.22408L6.85557 3.27977L7.12366 3.54786C7.19723 3.62096 7.29331 3.6671 7.39635 3.67884L7.4482 3.68191H7.83229C8.14617 3.68189 8.44816 3.80196 8.67633 4.0175C8.90451 4.23303 9.04158 4.5277 9.05943 4.84107L9.06135 4.91097V5.29505C9.06135 5.39876 9.09669 5.49977 9.16044 5.58043L9.19501 5.61884L9.46272 5.88693C9.68461 6.10756 9.81399 6.40452 9.82448 6.71726C9.83497 7.03 9.72578 7.33496 9.51918 7.56997L9.46348 7.62912L9.19539 7.89721C9.1223 7.97079 9.07616 8.06686 9.06442 8.16991L9.06135 8.22176V8.60584C9.06137 8.91972 8.9413 9.22171 8.72576 9.44989C8.51023 9.67807 8.21556 9.81514 7.90219 9.83299L7.83229 9.83491H7.4482C7.34465 9.83494 7.24412 9.86985 7.16283 9.934L7.12442 9.96857L6.85633 10.2363C6.6357 10.4582 6.33874 10.5875 6.026 10.598C5.71326 10.6085 5.4083 10.4993 5.17329 10.2927L5.11414 10.237L4.84605 9.96895C4.77247 9.89586 4.6764 9.84971 4.57335 9.83798L4.5215 9.83491H4.13742C3.82354 9.83493 3.52155 9.71486 3.29337 9.49932C3.06519 9.28378 2.92813 8.98912 2.91027 8.67575L2.90835 8.60584V8.22176C2.90832 8.11821 2.87341 8.01768 2.80926 7.93639L2.77469 7.89798L2.50699 7.62989C2.2851 7.40926 2.15571 7.11229 2.14522 6.79956C2.13473 6.48682 2.24392 6.18185 2.45053 5.94684L2.50622 5.88769L2.77431 5.6196C2.8474 5.54603 2.89355 5.44995 2.90528 5.34691L2.90835 5.29505V4.91097L2.91027 4.84107C2.92742 4.53974 3.05485 4.25525 3.26827 4.04183C3.48169 3.82841 3.76618 3.70098 4.06751 3.68383L4.13742 3.68191H4.5215C4.62505 3.68187 4.72558 3.64697 4.80687 3.58282L4.84528 3.54825L5.11337 3.28054C5.22757 3.16566 5.36336 3.07448 5.51292 3.01226C5.66248 2.95004 5.82286 2.91799 5.98485 2.91797ZM7.4048 5.71486C7.33278 5.64285 7.2351 5.6024 7.13326 5.6024C7.03141 5.6024 6.93374 5.64285 6.86171 5.71486L5.59693 6.97926L5.10031 6.48302L5.06421 6.45114C4.98701 6.39145 4.88999 6.36338 4.79284 6.37264C4.6957 6.38189 4.60572 6.42777 4.54118 6.50097C4.47664 6.57416 4.44238 6.66917 4.44536 6.76671C4.44834 6.86425 4.48833 6.95699 4.55722 7.02611L5.32538 7.79428L5.36149 7.82616C5.43538 7.88348 5.52766 7.91187 5.621 7.906C5.71435 7.90013 5.80234 7.86041 5.86847 7.79428L7.4048 6.25795L7.43668 6.22184C7.49401 6.14795 7.5224 6.05567 7.51653 5.96233C7.51066 5.86899 7.47093 5.78099 7.4048 5.71486Z"
                                fill="#1DA0F2" />
                        </svg>
                    </div>
                    <div>
                        <h1 aria-label="name" class="p-subhead font-semibold">Ajey Nagar</h1>
                        <p aria-label="username" class="text-sky-500">@carryminati</p>
                    </div>
                </div>
                <div aria-label="description-and-stats" class="flex-[6]">
                    <p aria-label="bio" class="text-gray-800">Ye Apna Official hai. Business Managed by: @deepakchar7
                        Twitter: CarryMinati Watch
                        ⬇️</p>
                    <div aria-label="stats-container" class="flex gap-5 mt-4">
                        <div aria-label="stat">
                            <p aria-label="stat-field" class="font-medium">Followers</p>
                            <p aria-label="stat-value" class="text-[24px] font-medium text-primary">15.5M</p>
                        </div>
                        <div aria-label="stat">
                            <p aria-label="stat-field" class="font-medium">Engagement</p>
                            <p aria-label="stat-value" class="text-[24px] font-medium text-primary">2.5M</p>
                        </div>
                        <div aria-label="stat">
                            <p aria-label="stat-field" class="font-medium">Total Posts</p>
                            <p aria-label="stat-value" class="text-[24px] font-medium text-primary">905</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Overview section starts now -->
            <div aria-label="section-separator" class=" border-b-[2px] border-primary mt-5">
                <div aria-label="section-title"
                    class="border-b-[4px] border-primary w-fit ml-4 text-xl text-primary font-medium">
                    Overview</div>
            </div>

            <div aria-label="highlighted-stats" class="flex gap-3 mt-5">
                <div aria-label="stat"
                    class="py-3 flex-1 border border-primary rounded-md bg-primary-50 flex flex-col justify-center items-center gap-1">
                    <svg width="28" height="28" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_14995_50796)">
                            <g filter="url(#filter0_d_14995_50796)">
                                <path
                                    d="M11.1235 3.1367C10.8747 2.88779 10.5793 2.69033 10.2542 2.55562C9.92909 2.4209 9.58061 2.35156 9.22867 2.35156C8.87674 2.35156 8.52826 2.4209 8.20314 2.55562C7.87801 2.69033 7.58261 2.88779 7.33382 3.1367L6.81748 3.65303L6.30115 3.1367C5.7986 2.63415 5.117 2.35182 4.40629 2.35182C3.69558 2.35182 3.01398 2.63415 2.51144 3.1367C2.00889 3.63924 1.72656 4.32084 1.72656 5.03155C1.72656 5.74226 2.00889 6.42386 2.51144 6.92641L3.02777 7.44274L6.81748 11.2325L10.6072 7.44274L11.1235 6.92641C11.3724 6.67761 11.5699 6.38222 11.7046 6.05709C11.8393 5.73197 11.9087 5.38348 11.9087 5.03155C11.9087 4.67962 11.8393 4.33114 11.7046 4.00601C11.5699 3.68089 11.3724 3.38549 11.1235 3.1367Z"
                                    fill="#FF006B" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_14995_50796" x="1.72656" y="2.35156" width="10.9066" height="9.60781"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="0.725" dy="0.725" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix"
                                    values="0 0 0 0 0.207843 0 0 0 0 0.054902 0 0 0 0 0.372549 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14995_50796" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14995_50796"
                                    result="shape" />
                            </filter>
                            <clipPath id="clip0_14995_50796">
                                <rect width="11.6906" height="11.6906" fill="white"
                                    transform="translate(0.974609 0.890625)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p aria-label="stat-value" class="text-[24px] font-semibold text-primary">1.5M</p>
                    <p aria-label="stat-field">Avg. Likes</p>
                </div>
                <div aria-label="stat"
                    class="py-3 flex-1 border border-primary rounded-md bg-primary-50 flex flex-col justify-center items-center gap-1">
                    <svg width="28" height="28" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_14995_50803)">
                            <g filter="url(#filter0_d_14995_50803)">
                                <path
                                    d="M10.1383 5.81223C10.14 6.45695 9.98934 7.09296 9.69866 7.66844C9.35401 8.35805 8.82417 8.93808 8.16848 9.34357C7.5128 9.74905 6.75717 9.96399 5.98624 9.96428C5.34151 9.96596 4.70551 9.81533 4.13002 9.52465L1.3457 10.4528L2.27381 7.66844C1.98313 7.09296 1.8325 6.45695 1.83418 5.81223C1.83448 5.04129 2.04941 4.28566 2.4549 3.62998C2.86039 2.9743 3.44042 2.44445 4.13002 2.0998C4.70551 1.80912 5.34151 1.65849 5.98624 1.66017H6.23048C7.24863 1.71634 8.21029 2.14609 8.93133 2.86713C9.65238 3.58817 10.0821 4.54983 10.1383 5.56799V5.81223Z"
                                    fill="#54BAFF" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_14995_50803" x="1.3457" y="1.66016" width="9.51797" height="9.51797"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="0.725" dy="0.725" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix"
                                    values="0 0 0 0 0.207843 0 0 0 0 0.054902 0 0 0 0 0.372549 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14995_50803" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14995_50803"
                                    result="shape" />
                            </filter>
                            <clipPath id="clip0_14995_50803">
                                <rect width="10.0554" height="10.5125" fill="white"
                                    transform="translate(0.632812 0.890625)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p aria-label="stat-value" class="text-[24px] font-semibold text-primary">7.7K</p>
                    <p aria-label="stat-field">Avg. Comments</p>
                </div>
                <div aria-label="stat"
                    class="py-3 flex-1 border border-primary rounded-md bg-primary-50 flex flex-col justify-center items-center gap-1">
                    <svg width="28" height="28" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_14995_50810)">
                            <path
                                d="M6.50063 1.84375L7.9728 4.8262L11.2649 5.3074L8.88278 7.62761L9.44497 10.9055L6.50063 9.35705L3.55629 10.9055L4.11848 7.62761L1.73633 5.3074L5.02846 4.8262L6.50063 1.84375Z"
                                fill="#FE821C" />
                        </g>
                        <defs>
                            <filter id="filter0_d_14995_50810" x="1.73633" y="1.84375" width="10.2543" height="9.7875"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="0.725" dy="0.725" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix"
                                    values="0 0 0 0 0.207843 0 0 0 0 0.054902 0 0 0 0 0.372549 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14995_50810" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14995_50810"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>

                    <p aria-label="stat-value" class="text-[24px] font-semibold text-primary">0.84%</p>
                    <p aria-label="stat-field">Engagement Rate</p>
                </div>
                <div aria-label="stat"
                    class="py-3 flex-1 border border-primary rounded-md bg-primary-50 flex flex-col justify-center items-center gap-1">
                    <svg width="28" height="28" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_14995_50817)">
                            <path
                                d="M6.34007 1.96484C5.42143 1.96484 4.52341 2.23725 3.75958 2.74763C2.99576 3.258 2.40043 3.98341 2.04888 4.83213C1.69733 5.68085 1.60534 6.61475 1.78456 7.51575C1.96378 8.41674 2.40615 9.24436 3.05573 9.89394C3.70531 10.5435 4.53293 10.9859 5.43393 11.1651C6.33492 11.3443 7.26883 11.2523 8.11754 10.9008C8.96626 10.5492 9.69168 9.95392 10.202 9.19009C10.7124 8.42626 10.9848 7.52825 10.9848 6.6096C10.9833 5.37821 10.4934 4.19769 9.62272 3.32696C8.75199 2.45623 7.57147 1.96638 6.34007 1.96484ZM7.96752 6.90704L5.82379 8.3362C5.76499 8.37517 5.69603 8.39598 5.62549 8.39605C5.53074 8.39605 5.43986 8.3584 5.37285 8.2914C5.30585 8.2244 5.26821 8.13352 5.26821 8.03876V5.18045C5.26816 5.11575 5.28569 5.05225 5.31892 4.99673C5.35214 4.94122 5.39982 4.89576 5.45686 4.86522C5.5139 4.83469 5.57816 4.82021 5.64278 4.82334C5.70741 4.82647 5.76997 4.84709 5.82379 4.883L7.96752 6.31216C8.01653 6.34477 8.05672 6.38899 8.08452 6.44088C8.11232 6.49278 8.12687 6.55073 8.12687 6.6096C8.12687 6.66847 8.11232 6.72643 8.08452 6.77832C8.05672 6.83021 8.01653 6.87443 7.96752 6.90704Z"
                                fill="#8E46A3" />
                        </g>
                        <defs>
                            <filter id="filter0_d_14995_50817" x="1.69531" y="1.96484" width="10.0141" height="10.0141"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="0.725" dy="0.725" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix"
                                    values="0 0 0 0 0.207843 0 0 0 0 0.054902 0 0 0 0 0.372549 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14995_50817" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14995_50817"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>

                    <p aria-label="stat-value" class="text-[24px] font-semibold text-primary">8.9M</p>
                    <p aria-label="stat-field">Avg. Reel Plays</p>
                </div>
                <div aria-label="stat"
                    class="py-3 flex-1 border border-primary rounded-md bg-primary-50 flex flex-col justify-center items-center gap-1">
                    <svg width="28" height="28" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_14995_50825)">
                            <circle cx="5.24486" cy="6.24681" r="4.27025" fill="#16B21C" />
                        </g>
                        <path
                            d="M5.33627 8.98047L3.79473 6.28891V5.93003H3.97417C4.26236 5.93003 4.50433 5.90284 4.70008 5.84847C4.90127 5.79409 5.05895 5.70437 5.17314 5.57931C5.28733 5.45425 5.3553 5.28297 5.37705 5.06547H3.79473V4.54347H5.36889C5.33083 4.34228 5.2547 4.17916 5.14052 4.05409C5.02633 3.92359 4.87136 3.82844 4.67561 3.76862C4.4853 3.70881 4.25148 3.67891 3.97417 3.67891H3.79473V3.15691H7.17142V3.67891H5.62989C5.75495 3.78222 5.85827 3.90456 5.93983 4.04594C6.02139 4.18731 6.07305 4.35316 6.0948 4.54347H7.17142V5.06547H6.11111C6.07305 5.46241 5.9208 5.77234 5.65436 5.99528C5.39336 6.21278 5.04536 6.35144 4.61036 6.41125L6.1682 8.98047H5.33627Z"
                            fill="white" />
                        <defs>
                            <filter id="filter0_d_14995_50825" x="0.974609" y="1.97656" width="9.26602" height="9.26406"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="0.725" dy="0.725" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix"
                                    values="0 0 0 0 0.207843 0 0 0 0 0.054902 0 0 0 0 0.372549 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14995_50825" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14995_50825"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>

                    <p aria-label="stat-value" class="text-[24px] font-semibold text-primary">23.6%</p>
                    <p aria-label="stat-field">Paid Post Performance</p>
                </div>
            </div>

            <p aria-label="card-title" class="card-title">Followers Growth</p>
            <div class="card">
                <div id="followers-growth-graph"></div>
            </div>

            <p aria-label="card-title" class="card-title">Likes Growth</p>
            <div class="card">
                <div id="likes-growth-graph"></div>
            </div>

            <p aria-label="card-title" class="card-title">Recent Post Engagement</p>
            <div class="card">
                <div id="post-engagement-graph"></div>
            </div>

            <div aria-label="interests-and-affinity" class="flex gap-4">
                <div aria-label="title-and-card-wrapper" class="flex-1 flex flex-col">
                    <p aria-label="card-title" class="card-title">Influencer Interests</p>
                    <div class="card flex-1 flex flex-col gap-2">
                        <p aria-label="list-item">Toys, Children & Baby</p>
                        <p aria-label="list-item">Electronics & Computers</p>
                        <p aria-label="list-item">Cars & Motorbikes</p>
                        <p aria-label="list-item">Business & Careers</p>
                    </div>
                </div>
                <div aria-label="title-and-card-wrapper" class="flex-1 flex flex-col">
                    <p aria-label="card-title" class="card-title">Influencer Brand Affinity</p>
                    <div class="card flex-1 flex flex-col gap-2">
                        <p aria-label="list-item">Nikon</p>
                        <p aria-label="list-item">Trip</p>
                        <p aria-label="list-item">Canon</p>
                        <p aria-label="list-item">Travelgram</p>
                    </div>
                </div>
            </div>

            <div aria-label="hashtags-and-mentions" class="flex gap-4">
                <div aria-label="title-and-card-wrapper" class="flex-1 flex flex-col">
                    <p aria-label="card-title" class="card-title">Influencer Interests</p>
                    <div class="card flex-1 flex justify-start items-start gap-2 flex-wrap">
                        <p aria-label="list-item" class="px-3 py-0.5 text-white font-light bg-primary rounded-[50vw]">#hello
                        </p>
                        <p aria-label="list-item" class="px-3 py-0.5 text-white font-light bg-primary rounded-[50vw]">#world
                        </p>
                        <p aria-label="list-item" class="px-3 py-0.5 text-white font-light bg-primary rounded-[50vw]">#code
                        </p>
                        <p aria-label="list-item" class="px-3 py-0.5 text-white font-light bg-primary rounded-[50vw]">#js
                        </p>
                        <p aria-label="list-item" class="px-3 py-0.5 text-white font-light bg-primary rounded-[50vw]">#ts
                        </p>
                    </div>
                </div>
                <div aria-label="title-and-card-wrapper" class="flex-1 flex flex-col">
                    <p aria-label="card-title" class="card-title">Influencer Brand Affinity</p>
                    <div class="card flex-1 flex justify-start items-start gap-2 flex-wrap">
                        <p aria-label="list-item" class="px-3 py-0.5 text-white font-light bg-primary rounded-[50vw]">
                            @primagen</p>
                        <p aria-label="list-item" class="px-3 py-0.5 text-white font-light bg-primary rounded-[50vw]">@theo
                        </p>
                        <p aria-label="list-item" class="px-3 py-0.5 text-white font-light bg-primary rounded-[50vw]">
                            @fireship</p>
                        <p aria-label="list-item" class="px-3 py-0.5 text-white font-light bg-primary rounded-[50vw]">
                            @jherrington</p>
                        <p aria-label="list-item" class="px-3 py-0.5 text-white font-light bg-primary rounded-[50vw]">
                            @webdevsimplified</p>
                        <p aria-label="list-item" class="px-3 py-0.5 text-white font-light bg-primary rounded-[50vw]">
                            @kevinpowel</p>
                    </div>
                </div>
            </div>

            <!-- Audience section starts now -->
            <div aria-label="section-separator" class=" border-b-[2px] border-primary mt-5">
                <div aria-label="section-title"
                    class="border-b-[4px] border-primary w-fit ml-4 text-xl text-primary font-medium">
                    Audience</div>
            </div>

            <div aria-label="info-bar"
                class="mt-[35px] border-l-[4px] py-[5px] px-2 border-secondary rounded-md bg-secondary-100">
                Audience
                data
                by
                <span class="font-semibold">Followers</span>
            </div>

            <div aria-label="info-and-summary-card-wrapper" class="mt-5 flex gap-4">
                <div class="card flex-[8] flex gap-3">
                    <div aria-label="single-info"
                        class="flex-1 flex flex-col gap-1 border-r-[1px] border-gray-300 last-of-type:border-r-[0px]">
                        <p aria-label="field" class="text-gray-700 text-sm">Top Country</p>
                        <p aria-label="value" class="mt-1 font-medium text-primary text-xl">India</p>
                        <p aria-label="percentage" class="text-primary font-medium text-lg">18.5%</p>
                    </div>
                    <div aria-label="single-info"
                        class="flex-1 flex flex-col gap-1 border-r-[1px] border-gray-300 last-of-type:border-r-[0px]">
                        <p aria-label="field" class="text-gray-700 text-sm">Top City</p>
                        <p aria-label="value" class="mt-1 font-medium text-primary text-xl">Delhi</p>
                        <p aria-label="percentage" class="text-primary font-medium text-lg">8.5%</p>
                    </div>
                    <div aria-label="single-info"
                        class="flex-1 flex flex-col gap-1 border-r-[1px] border-gray-300 last-of-type:border-r-[0px]">
                        <p aria-label="field" class="text-gray-700 text-sm">Top Gender</p>
                        <p aria-label="value" class="mt-1 font-medium text-primary text-xl">Male</p>
                        <p aria-label="percentage" class="text-primary font-medium text-lg">56.5%</p>
                    </div>
                    <div aria-label="single-info"
                        class="flex-1 flex flex-col gap-1 border-r-[1px] border-gray-300 last-of-type:border-r-[0px]">
                        <p aria-label="field" class="text-gray-700 text-sm">Top Age Group</p>
                        <p aria-label="value" class="mt-1 font-medium text-primary text-xl">25-34 yrs</p>
                        <p aria-label="percentage" class="text-primary font-medium text-lg">26.5%</p>
                    </div>
                </div>
                <div aria-label="summary-card" class="card flex-[3] text-sm border border-secondary bg-secondary-100">Most
                    of
                    the followers
                    are located in
                    <span class="font-semibold">
                        New Zealand
                        (18.5%)</span>, is <span class="font-semibold">Male (57.9%)</span>, and is between the ages of <span
                        class="font-semibold">25-34 (26.8%).</span>
                </div>
            </div>

            <!-- follower geography -->
            <p aria-label="card-title" class="card-title">Follower Geography</p>
            <div aria-label="counties-geography" class="card">
                <p aria-label="card-title" class="card-title text-gray-700 m-0 mb-3">Countries</p>
                <div class="grid grid-cols-2 gap-4">
                    <div aria-label="bar_with_title" class="">
                        <div aria-label="heading" class="flex justify-between">
                            <p>India</p>
                            <p>88%</p>
                        </div>
                        <div class="h-[10px] w-full rounded-full bg-gray-200" aria-label="progress" role="progressbar"
                            aria-label={name} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
                            <div class="w-[88%] bg-secondary h-full rounded-full" aria-label="progress-bar"
                                data-for-jsx="style={{ width: percentage, backgroundColor: backgroundColor }}"></div>
                        </div>
                    </div>
                    <div aria-label="bar_with_title" class="">
                        <div aria-label="heading" class="flex justify-between">
                            <p>Nepal</p>
                            <p>5%</p>
                        </div>
                        <div class="h-[10px] w-full rounded-full bg-gray-200" aria-label="progress" role="progressbar"
                            aria-label={name} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
                            <div class="w-[5%] bg-secondary h-full rounded-full" aria-label="progress-bar"
                                data-for-jsx="style={{ width: percentage, backgroundColor: backgroundColor }}"></div>
                        </div>
                    </div>
                    <div aria-label="bar_with_title" class="">
                        <div aria-label="heading" class="flex justify-between">
                            <p>Canada</p>
                            <p>4%</p>
                        </div>
                        <div class="h-[10px] w-full rounded-full bg-gray-200" aria-label="progress" role="progressbar"
                            aria-label={name} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
                            <div class="w-[4%] bg-secondary h-full rounded-full" aria-label="progress-bar"
                                data-for-jsx="style={{ width: percentage, backgroundColor: backgroundColor }}"></div>
                        </div>
                    </div>
                    <div aria-label="bar_with_title" class="">
                        <div aria-label="heading" class="flex justify-between">
                            <p>U.S.</p>
                            <p>3%</p>
                        </div>
                        <div class="h-[10px] w-full rounded-full bg-gray-200" aria-label="progress" role="progressbar"
                            aria-label={name} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
                            <div class="w-[3%] bg-secondary h-full rounded-full" aria-label="progress-bar"
                                data-for-jsx="style={{ width: percentage, backgroundColor: backgroundColor }}"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div aria-label="cities-geography" class="card mt-5">
                <p aria-label="card-title" class="card-title text-gray-700 m-0 mb-3">Cities</p>
                <div class="grid grid-cols-2 gap-4">
                    <div aria-label="bar_with_title" class="">
                        <div aria-label="heading" class="flex justify-between">
                            <p>Delhi</p>
                            <p>90%</p>
                        </div>
                        <div class="h-[10px] w-full rounded-full bg-gray-200" aria-label="progress" role="progressbar"
                            aria-label={name} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
                            <div class="w-[90%] bg-secondary h-full rounded-full" aria-label="progress-bar"
                                data-for-jsx="style={{ width: percentage, backgroundColor: backgroundColor }}"></div>
                        </div>
                    </div>
                    <div aria-label="bar_with_title" class="">
                        <div aria-label="heading" class="flex justify-between">
                            <p>Mumbai</p>
                            <p>5%</p>
                        </div>
                        <div class="h-[10px] w-full rounded-full bg-gray-200" aria-label="progress" role="progressbar"
                            aria-label={name} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
                            <div class="w-[5%] bg-secondary h-full rounded-full" aria-label="progress-bar"
                                data-for-jsx="style={{ width: percentage, backgroundColor: backgroundColor }}"></div>
                        </div>
                    </div>
                    <div aria-label="bar_with_title" class="">
                        <div aria-label="heading" class="flex justify-between">
                            <p>Noida</p>
                            <p>3%</p>
                        </div>
                        <div class="h-[10px] w-full rounded-full bg-gray-200" aria-label="progress" role="progressbar"
                            aria-label={name} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
                            <div class="w-[3%] bg-secondary h-full rounded-full" aria-label="progress-bar"
                                data-for-jsx="style={{ width: percentage, backgroundColor: backgroundColor }}"></div>
                        </div>
                    </div>
                    <div aria-label="bar_with_title" class="">
                        <div aria-label="heading" class="flex justify-between">
                            <p>pune</p>
                            <p>2%</p>
                        </div>
                        <div class="h-[10px] w-full rounded-full bg-gray-200" aria-label="progress" role="progressbar"
                            aria-label={name} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
                            <div class="w-[2%] bg-secondary h-full rounded-full" aria-label="progress-bar"
                                data-for-jsx="style={{ width: percentage, backgroundColor: backgroundColor }}"></div>
                        </div>
                    </div>
                </div>
            </div>

            <p aria-label="card-title" class="card-title">Age & Gender</p>
            <div class="card">
                <div aria-label="age-and-gender-wrapper" class="flex gap-4">
                    <div aria-label="single-graph" class="flex-1 border-r-[1px] border-gray-300">
                        <div id="age-n-gender-ratio"></div>
                    </div>
                    <div aria-label="single-graph" class="flex-1 flex justify-center items-center">
                        <div id="gender-group-split"></div>
                    </div>
                </div>
            </div>

            <div aria-label="credibility">
                <p aria-label="card-title" class="card-title">Credibility</p>
                <div class="card flex justify-center items-center">
                    <div id="credibility-graph"></div>
                    <div>
                        <p class="text-gray-700">
                            Active Followers:
                            <span class="font-semibold text-black">
                                <!-- {beautify(
                                    (audience.credibility *
                                    100 *
                                    socialPage?.profile?.followers) /
                                    100
                                    )} -->
                                479.8M
                            </span>
                        </p>
                        <p class="text-gray-700">
                            Inactive Followers:
                            <span class="font-semibold text-black">
                                <!-- {beautify(
                                    ((100 - audience.credibility * 100) *
                                    socialPage?.profile?.followers) /
                                    100
                                    )} -->
                                170.1M
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <!--  -->
            <div aria-label="language-and-ethnicity" class="flex gap-4">
                <div aria-label="title-and-card-wrapper" class="flex-1 flex flex-col">
                    <p aria-label="card-title" class="card-title">Influencer Interests</p>
                    <div class="card flex-1 flex flex-col justify-start items-start gap-0">
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>English</span>
                            <span>52.2%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Hindi</span>
                            <span>18.7%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Marathi</span>
                            <span>12.2%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Gujarati</span>
                            <span>10.9%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Punjabi</span>
                            <span>7.0%</span>
                        </p>
                    </div>
                </div>
                <div aria-label="title-and-card-wrapper" class="flex-1 flex flex-col">
                    <p aria-label="card-title" class="card-title">Ethinicity</p>
                    <div class="card flex-1 flex flex-col justify-start items-start gap-0">
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Asian</span>
                            <span>52.2%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>American</span>
                            <span>18.7%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Hispanic</span>
                            <span>12.2%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Caucasian</span>
                            <span>10.9%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>African</span>
                            <span>7.0%</span>
                        </p>
                    </div>
                </div>
            </div>

            <div aria-label="language-and-ethnicity" class="flex gap-4">
                <div aria-label="title-and-card-wrapper" class="flex-1 flex flex-col">
                    <p aria-label="card-title" class="card-title">Follower Brand Affinity</p>
                    <div class="card flex-1 flex flex-col justify-start items-start gap-0">
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>English</span>
                            <span>52.2%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Hindi</span>
                            <span>18.7%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Marathi</span>
                            <span>12.2%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Gujarati</span>
                            <span>10.9%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Punjabi</span>
                            <span>7.0%</span>
                        </p>
                    </div>
                </div>
                <div aria-label="title-and-card-wrapper" class="flex-1 flex flex-col">
                    <p aria-label="card-title" class="card-title">Follower Interests</p>
                    <div class="card flex-1 flex flex-col justify-start items-start gap-0">
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Asian</span>
                            <span>52.2%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>American</span>
                            <span>18.7%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Hispanic</span>
                            <span>12.2%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>Caucasian</span>
                            <span>10.9%</span>
                        </p>
                        <p aria-label="list-item"
                            class="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium">
                            <span>African</span>
                            <span>7.0%</span>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Notabel Followers -->
            <p class="text-2xl mt-[3rem]">Notable Followers</p>
            <table class="table-auto w-full mt-5">
                <thead class="text-gray-700">
                    <tr>
                        <th class="text-start font-light">Influencer</th>
                        <th class="font-light">Followers</th>
                        <th class="text-end font-light">Engagement</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b-[1px]" style="padding-bottom: 1rem;">
                        <td aria-label="Influencer" class="py-3">
                            <div class="flex gap-2">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="profile" class="w-[50px] h-[50px] rounded-full object-cover">
                                <div>
                                    <h1 aria-label="name" class="text-xl font-semibold">Ajey Nagar</h1>
                                    <p aria-label="username" class="text-sky-500">@carryminati</p>
                                </div>
                            </div>
                        </td>
                        <td aria-label="followers" class="text-center font-semibold">150M</td>
                        <td aria-label="Engagement" class="text-end font-semibold">8.56%</td>
                    </tr>
                    <tr class="border-b-[1px]" style="padding-bottom: 1rem;">
                        <td aria-label="Influencer" class="py-3">
                            <div class="flex gap-2">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="profile" class="w-[50px] h-[50px] rounded-full object-cover">
                                <div>
                                    <h1 aria-label="name" class="text-xl font-semibold">Ajey Nagar</h1>
                                    <p aria-label="username" class="text-sky-500">@carryminati</p>
                                </div>
                            </div>
                        </td>
                        <td aria-label="followers" class="text-center font-semibold">150M</td>
                        <td aria-label="Engagement" class="text-end font-semibold">8.56%</td>
                    </tr>
                    <tr class="border-b-[1px]" style="padding-bottom: 1rem;">
                        <td aria-label="Influencer" class="py-3">
                            <div class="flex gap-2">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="profile" class="w-[50px] h-[50px] rounded-full object-cover">
                                <div>
                                    <h1 aria-label="name" class="text-xl font-semibold">Ajey Nagar</h1>
                                    <p aria-label="username" class="text-sky-500">@carryminati</p>
                                </div>
                            </div>
                        </td>
                        <td aria-label="followers" class="text-center font-semibold">150M</td>
                        <td aria-label="Engagement" class="text-end font-semibold">8.56%</td>
                    </tr>
                    <tr class="border-b-[1px]" style="padding-bottom: 1rem;">
                        <td aria-label="Influencer" class="py-3">
                            <div class="flex gap-2">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="profile" class="w-[50px] h-[50px] rounded-full object-cover">
                                <div>
                                    <h1 aria-label="name" class="text-xl font-semibold">Ajey Nagar</h1>
                                    <p aria-label="username" class="text-sky-500">@carryminati</p>
                                </div>
                            </div>
                        </td>
                        <td aria-label="followers" class="text-center font-semibold">150M</td>
                        <td aria-label="Engagement" class="text-end font-semibold">8.56%</td>
                    </tr>
                    <tr class="border-b-[1px]" style="padding-bottom: 1rem;">
                        <td aria-label="Influencer" class="py-3">
                            <div class="flex gap-2">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="profile" class="w-[50px] h-[50px] rounded-full object-cover">
                                <div>
                                    <h1 aria-label="name" class="text-xl font-semibold">Ajey Nagar</h1>
                                    <p aria-label="username" class="text-sky-500">@carryminati</p>
                                </div>
                            </div>
                        </td>
                        <td aria-label="followers" class="text-center font-semibold">150M</td>
                        <td aria-label="Engagement" class="text-end font-semibold">8.56%</td>
                    </tr>
                </tbody>
            </table>

            <!-- Audience Lookalikes -->
            <p class="text-2xl mt-[3rem]">Audience Lookalikes</p>
            <table class="table-auto w-full mt-5">
                <thead class="text-gray-700">
                    <tr>
                        <th class="text-start font-light">Influencer</th>
                        <th class="font-light">Followers</th>
                        <th class="text-end font-light">Engagement</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b-[1px]" style="padding-bottom: 1rem;">
                        <td aria-label="Influencer" class="py-3">
                            <div class="flex gap-2">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="profile" class="w-[50px] h-[50px] rounded-full object-cover">
                                <div>
                                    <h1 aria-label="name" class="text-xl font-semibold">Ajey Nagar</h1>
                                    <p aria-label="username" class="text-sky-500">@carryminati</p>
                                </div>
                            </div>
                        </td>
                        <td aria-label="followers" class="text-center font-semibold">150M</td>
                        <td aria-label="Engagement" class="text-end font-semibold">8.56%</td>
                    </tr>
                    <tr class="border-b-[1px]" style="padding-bottom: 1rem;">
                        <td aria-label="Influencer" class="py-3">
                            <div class="flex gap-2">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="profile" class="w-[50px] h-[50px] rounded-full object-cover">
                                <div>
                                    <h1 aria-label="name" class="text-xl font-semibold">Ajey Nagar</h1>
                                    <p aria-label="username" class="text-sky-500">@carryminati</p>
                                </div>
                            </div>
                        </td>
                        <td aria-label="followers" class="text-center font-semibold">150M</td>
                        <td aria-label="Engagement" class="text-end font-semibold">8.56%</td>
                    </tr>
                    <tr class="border-b-[1px]" style="padding-bottom: 1rem;">
                        <td aria-label="Influencer" class="py-3">
                            <div class="flex gap-2">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="profile" class="w-[50px] h-[50px] rounded-full object-cover">
                                <div>
                                    <h1 aria-label="name" class="text-xl font-semibold">Ajey Nagar</h1>
                                    <p aria-label="username" class="text-sky-500">@carryminati</p>
                                </div>
                            </div>
                        </td>
                        <td aria-label="followers" class="text-center font-semibold">150M</td>
                        <td aria-label="Engagement" class="text-end font-semibold">8.56%</td>
                    </tr>
                    <tr class="border-b-[1px]" style="padding-bottom: 1rem;">
                        <td aria-label="Influencer" class="py-3">
                            <div class="flex gap-2">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="profile" class="w-[50px] h-[50px] rounded-full object-cover">
                                <div>
                                    <h1 aria-label="name" class="text-xl font-semibold">Ajey Nagar</h1>
                                    <p aria-label="username" class="text-sky-500">@carryminati</p>
                                </div>
                            </div>
                        </td>
                        <td aria-label="followers" class="text-center font-semibold">150M</td>
                        <td aria-label="Engagement" class="text-end font-semibold">8.56%</td>
                    </tr>
                    <tr class="border-b-[1px]" style="padding-bottom: 1rem;">
                        <td aria-label="Influencer" class="py-3">
                            <div class="flex gap-2">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="profile" class="w-[50px] h-[50px] rounded-full object-cover">
                                <div>
                                    <h1 aria-label="name" class="text-xl font-semibold">Ajey Nagar</h1>
                                    <p aria-label="username" class="text-sky-500">@carryminati</p>
                                </div>
                            </div>
                        </td>
                        <td aria-label="followers" class="text-center font-semibold">150M</td>
                        <td aria-label="Engagement" class="text-end font-semibold">8.56%</td>
                    </tr>
                </tbody>
            </table>

        </div>

        <!-- scripts -->
        <script>
            const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

            const millify = (number) => {
                // what tier? (determines SI symbol)
                let tier = Math.log10(Math.abs(number)) / 3 | 0;

                // if zero, we don't need a suffix
                if (tier == 0) return number;

                // get suffix and determine scale
                let suffix = SI_SYMBOL[tier];
                let scale = Math.pow(10, tier * 3);

                // scale the number
                let scaled = number / scale;

                // format number and add suffix
                return scaled.toFixed(1) + suffix;
            }

            // ---------------  All necessary Data   ----------------
            const statHistory = [
                {
                    "month": "2023-01",
                    "followers": 592633094,
                    "avgLikes": 645804,
                    "following": 93
                },
                {
                    "month": "2023-02",
                    "followers": 603984472,
                    "avgLikes": 613860,
                    "following": 56
                },
                {
                    "month": "2023-03",
                    "followers": 620689048,
                    "avgLikes": 534841,
                    "following": 48
                },
                {
                    "month": "2023-04",
                    "followers": 634581498,
                    "avgLikes": 486658,
                    "following": 59
                },
                {
                    "month": "2023-05",
                    "followers": 636338809,
                    "avgLikes": 446911,
                    "following": 61
                },
                {
                    "month": "2023-06",
                    "followers": 645239465,
                    "avgLikes": 453310,
                    "following": 77
                },
                {
                    "month": "2023-07",
                    "followers": 649216921,
                    "avgLikes": 439246,
                    "following": 86
                }
            ]

            const recentPosts = [
                {
                    "id": "3136736071387065862_25025320",
                    "text": "Small but mighty 🐾  @our_fostering_tails gives vulnerable kittens a fighting chance.  “Ainsley is one in a million. She has the friendliest heart ever and she's got moves to rival the best of them,” says her foster human, Lauren.  #WeeklyFluff  Video by @our_fostering_tails Music by @henrymancini",
                    "url": "https://www.instagram.com/p/CuH7NZ5Li4G/",
                    "created": "2023-06-30T18:03:14.000+00:00",
                    "type": "video",
                    "likes": 447684,
                    "comments": 9519,
                    "mentions": [
                        "our_fostering_tails",
                        "henrymancini"
                    ],
                    "hashtags": [
                        "WeeklyFluff"
                    ]
                },
                {
                    "id": "3136674199238248580_25025320",
                    "text": "Some things start small 🍟",
                    "url": "https://www.instagram.com/p/CuHtJC9uoiE/",
                    "created": "2023-06-30T16:01:05.000+00:00",
                    "type": "video",
                    "likes": 136654,
                    "comments": 4039
                },
                {
                    "id": "3135948513954186179_25025320",
                    "text": "Creator @focusedindian's (Karan Sonawane) dreams came true when he connected with actor @vickykaushal09 (Vicky Kaushal). 🤯  “Vicky Kaushal had shared one of my Reels on his Stories! I gathered some courage, and I replied to him.” Karan and Vicky later met IRL and even collaborated on a video.  “My advice to everyone is believe in magic,” says Karan. “Take chances. And one day you will surely be seen.”  #Seen is our new series all about what's possible when you connect in DMs.",
                    "url": "https://www.instagram.com/p/CuFII74J0PD/",
                    "created": "2023-06-29T15:59:54.000+00:00",
                    "type": "video",
                    "likes": 174556,
                    "comments": 4380,
                    "mentions": [
                        "focusedindian",
                        "vickykaushal09"
                    ],
                    "hashtags": [
                        "Seen"
                    ]
                },
                {
                    "id": "3135230614827517446_25025320",
                    "text": "“I just wanna dance”  #InTheMoment  Video by @ju_bal__ Music by @deyluvkirby",
                    "url": "https://www.instagram.com/p/CuCk6INuUYG/",
                    "created": "2023-06-28T16:12:21.000+00:00",
                    "type": "video",
                    "likes": 227954,
                    "comments": 5899,
                    "mentions": [
                        "ju_bal__",
                        "deyluvkirby"
                    ],
                    "hashtags": [
                        "InTheMoment"
                    ]
                },
                {
                    "id": "3134501466718141610_25025320",
                    "text": "“I want my music to stretch beyond escapism and into reclamation. Many environments ask for queer people to shrink themselves. My goal is to be part of the movement dismantling that.” —Singer-songwriter @jeffreyeli (Jeffrey Eli)  “I've always had a curiosity and a yearning to create. I try to exist in a stay and play nature in my daily life. That's a space that making music allows for.  I felt a lot of pressure to be hyper-masculine when I was starting out. I was told many times that I sing, look and act too much like a woman. I never understood why that was a bad thing. I wrote a pop song called 'Gay Man' about being pansexual and playing with gender.  At my core, I hope to stretch beyond any labels placed on me. As I write more songs, I discover more pieces about me and my queerness. The multitudes I contain are endless and the same goes for any artist and any human.”  Photos by @jeffreyeli",
                    "url": "https://www.instagram.com/p/Ct__HoHrPyq/",
                    "created": "2023-06-27T16:01:54.000+00:00",
                    "type": "photo",
                    "likes": 445284,
                    "comments": 16818,
                    "mentions": [
                        "jeffreyeli"
                    ]
                },
                {
                    "id": "3133029361461447717_25025320",
                    "text": "🌈 “Luxx Noir London is the physical embodiment of the word 'superstar.' Drag allows me to express every crazy and creative thought that pops into my mind,” says @luxxnoirlondon.The drag queen from East Orange, New Jersey, uses their superstar powers to inspire people to show up for the LGBTQ+ community all year long.“Support is going to Pride events, not just posting a graphic online. Going to drag shows all throughout the year. Supporting a local queer artist or business. Number one is to show up.”#ShareWithPride",
                    "url": "https://www.instagram.com/p/Ct6wZrQx0wl/",
                    "created": "2023-06-25T15:17:06.000+00:00",
                    "type": "photo",
                    "likes": 249377,
                    "comments": 9346,
                    "mentions": [
                        "luxxnoirlondon"
                    ],
                    "hashtags": [
                        "ShareWithPride"
                    ]
                },
                {
                    "id": "3131665810039701205_25025320",
                    "text": "On top of the world.  @smallest.of.the.small (Mr. Pink) is half the size of a normal Chihuahua and loves doing big dog things and adventuring with fellow rescue Nita, an Aussie-wheaten mix. “They adore each other,” says their human Lisa.  #WeeklyFluff  Video by @smallest.of.the.small Music by @imaginedragons",
                    "url": "https://www.instagram.com/p/Ct16XZCpv7V/",
                    "created": "2023-06-23T18:09:21.000+00:00",
                    "type": "video",
                    "likes": 403711,
                    "comments": 8573,
                    "mentions": [
                        "smallest.of.the.small",
                        "imaginedragons"
                    ],
                    "hashtags": [
                        "WeeklyFluff"
                    ]
                },
                {
                    "id": "3131602773602192543_25025320",
                    "text": "🌈 “My path as an artist was not easy. I was repeatedly disappointed and rejected countless times, but I never gave up,” says @tiger.killerrr (Ratthanan Utthachat). “The most important thing is that I can be myself.”  Ratthanan is a music artist and content creator living in Bangkok, Thailand, who created their own path as an artist and helped raise visibility for nonbinary people along the way.  “Now we are gradually more accepted, understood and respected because of the power of Thai LGBTQ+ people,” says Ratthanan.  “If you are ready to learn and respect the diversity of this community, you could be a part of us. You can come out whenever you feel safe. You can define yourself as anything or not specified at all. Our community is ready to welcome everyone.”  #ShareWithPride",
                    "url": "https://www.instagram.com/p/Ct1sCFyL8yf/",
                    "created": "2023-06-23T16:02:43.000+00:00",
                    "type": "photo",
                    "likes": 266421,
                    "comments": 6627,
                    "mentions": [
                        "tiger.killerrr"
                    ],
                    "hashtags": [
                        "ShareWithPride"
                    ]
                },
                {
                    "id": "3130944445678616546_25025320",
                    "text": "Denim on denim looks#InTheMomentVideo by @by.regiinaMusic by @feliciathegoat",
                    "url": "https://www.instagram.com/p/CtzWWKIJ__i/",
                    "created": "2023-06-22T18:15:51.000+00:00",
                    "type": "video",
                    "likes": 139404,
                    "comments": 4784,
                    "mentions": [
                        "by.regiina",
                        "feliciathegoat"
                    ],
                    "hashtags": [
                        "InTheMoment"
                    ]
                },
                {
                    "id": "3130877573014547008_25025320",
                    "text": "Artist @gloriagroove (Gloria Groove) is a big believer in the power of DMs. It's the way Gloria first connected with @rosalia.vt (Rosalía)... before an impromptu performance together at Lollapalooza in São Paulo. 🔥  “[Rosalía's] doing the show, and then she comes down from the stairs and she's going through the front, and she sees me and she's like, 'Oh my God, it's you. I remember you,'” says Gloria. “Not only did she she remember who I was, but she trusted me with a tiny bit of this show.”  #Seen is our new series all about what's possible when you connect in DMs.",
                    "url": "https://www.instagram.com/p/CtzHJCGxOpA/",
                    "created": "2023-06-22T16:03:47.000+00:00",
                    "type": "video",
                    "likes": 189594,
                    "comments": 5988,
                    "mentions": [
                        "gloriagroove",
                        "rosalia.vt"
                    ],
                    "hashtags": [
                        "Seen"
                    ]
                }
            ]

            const gendersPerAge = [
                {
                    "code": "13-17",
                    "male": 0.024728,
                    "female": 0.04486
                },
                {
                    "code": "18-24",
                    "male": 0.195277,
                    "female": 0.202463
                },
                {
                    "code": "25-34",
                    "male": 0.243841,
                    "female": 0.146815
                },
                {
                    "code": "35-44",
                    "male": 0.05379,
                    "female": 0.035125
                },
                {
                    "code": "45-64",
                    "male": 0.025875,
                    "female": 0.026574
                }
            ]

            // ---------------  Followers Growth Graph Logic   ----------------
            const FG_Series = [
                {
                    name: 'Followers',
                    data: statHistory.map(({ month, followers }) => ({
                        x: new Date(month),
                        y: followers,
                    })),
                },
            ];

            const FG_Options = {
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0,
                    },
                    type: 'area',
                    height: 350,
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    formatter: (value) => {
                        return millify(+value);
                    },
                    enabled: true,
                    style: {
                        fontSize: '14px',
                        fontWeight: 400
                    },
                    background: {
                        enabled: true,
                        padding: 20,
                        borderWidth: 0,
                    },
                },
                stroke: {
                    curve: 'smooth',
                },
                xaxis: {
                    type: 'datetime',
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        style: {
                            fontSize: '14px',
                        }
                    }
                },
                yaxis: {
                    labels: {
                        formatter: (value) => {
                            return millify(+value);
                            // return value
                        },
                        style: {
                            fontSize: '14px',
                        }
                    },
                },
                tooltip: {
                    x: {
                        format: 'dd MMM yyyy',
                    },
                },
                series: FG_Series,
                colors: ['#9f4bd1'],
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0,
                        onClick: undefined,
                        onDblClick: undefined,
                        showNullDataPoints: true,
                        hover: {
                            size: undefined,
                            sizeOffset: 3,
                        },
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0,
                    },
                },
                grid: {
                    borderColor: '#f1f1f1',
                },
            };

            const followerGrowthChart = new ApexCharts(document.querySelector("#followers-growth-graph"), FG_Options);
            followerGrowthChart.render();

            // ---------------  Likes Growth Graph Logic   ----------------
            const LG_Series = [
                {
                    name: 'Likes',
                    data: statHistory.map(({ month, avgLikes }) => ({
                        // x: new Date(month),
                        x: month,
                        y: avgLikes,
                    })),
                },
            ];

            const LG_Options = {
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0,
                    },
                    type: 'area',
                    height: 350,
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    formatter: (value) => {
                        return millify(+value);
                    },
                    enabled: true,
                    style: {
                        fontSize: '14px',
                        fontWeight: 400
                    },
                    background: {
                        enabled: true,
                        padding: 20,
                        borderWidth: 0,
                    },
                },
                stroke: {
                    curve: 'smooth',
                },
                xaxis: {
                    type: 'datetime',
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        style: {
                            fontSize: '14px',
                        }
                    }
                },
                yaxis: {
                    labels: {
                        formatter: (value) => {
                            return millify(+value);
                        },
                        style: {
                            fontSize: '14px',
                        }
                    },
                },
                tooltip: {
                    x: {
                        format: 'dd MMM yyyy',
                    },
                },
                series: LG_Series,
                colors: ['#9f4bd1'],
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0,
                        onClick: undefined,
                        onDblClick: undefined,
                        showNullDataPoints: true,
                        hover: {
                            size: undefined,
                            sizeOffset: 3,
                        },
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0,
                    },
                },
                grid: {
                    borderColor: '#f1f1f1',
                },
            };

            const likesGrowthChart = new ApexCharts(document.querySelector("#likes-growth-graph"), LG_Options);
            likesGrowthChart.render();


            // ---------------  Recent Post Engagement Graph Logic   ----------------
            const RPE_Options = {
                series: [
                    {
                        name: 'Likes',
                        group: 'likes',
                        data: recentPosts?.map((item) => (item.likes))
                    },
                    {
                        name: 'Comments',
                        group: 'comments',
                        data: recentPosts?.map((item) => (item.comments))
                    }
                ],
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0,
                    },
                    type: 'bar',
                    height: 350,
                    stacked: false,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: true
                    }
                },
                dataLabels: {
                    position: "top",
                    offsetX: 0,
                    offsetY: 20,
                    formatter: (v) => millify(v),
                    enabled: true,
                    style: {
                        fontSize: '16px',
                        fontWeight: 600
                    },
                    background: {
                        enabled: true,
                        padding: 10,
                        borderWidth: 0,
                        foreColor: '#111',
                        opacity: 0.35,
                    },
                },
                colors: ['#350e5f', '#9e4ad1'],
                xaxis: {
                    categories: recentPosts?.map((e) => moment(e.created).format('DD-MM-YY')),
                    labels: {
                        style: {
                            fontSize: '14px',
                        }
                    }
                },
                yaxis: {
                    labels: {
                        formatter: (val) => millify(val),
                        style: {
                            fontSize: '14px',
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 1,
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                },
                fill: {
                    opacity: 1
                },
            };

            const recentPostEngagementsChart = new ApexCharts(document.querySelector("#post-engagement-graph"), RPE_Options);
            recentPostEngagementsChart.render();

            // ---------------  Age and Gender ratio Graph Logic   ----------------
            const AnG_Options = {
                series: [
                    {
                        name: 'Male',
                        // group: 'male',
                        data: gendersPerAge?.map((item) => (item.male * 100).toFixed(2))
                    },
                    {
                        name: 'Female',
                        // group: 'female',
                        data: gendersPerAge?.map((item) => (item.female * 100).toFixed(2))
                    },
                ],
                dataLabels: {
                    formatter: (val) => val + '%',
                },
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0,
                    },
                    stacked: true,
                    type: 'bar',
                    height: 350,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: true
                    }
                },
                colors: ['#350e5f', '#9e4ad1'],
                yaxis: {
                    labels: {
                        formatter: (val) => {
                            return val + '%'
                        }
                    },
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 5,
                        dataLabels: {
                            formatter: (val) => val.toFixed(2),
                            total: {
                                formatter: (val) => val.toFixed(2) + '%',
                                enabled: true,
                                style: {
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: '#101010',
                                }
                            }
                        }
                    },
                },
                xaxis: {
                    categories: gendersPerAge?.map((e) => e.code)
                },
                legend: {
                    position: 'bottom',
                    offsetY: 0,
                    fontFamily: "Roboto",
                    fontWeight: 500,
                    fontSize: "15px"
                },
                fill: {
                    opacity: 1
                }
            };

            const ageAndGenderRatioChart = new ApexCharts(document.querySelector("#age-n-gender-ratio"), AnG_Options);
            ageAndGenderRatioChart.render();

            // ---------------  Gender split Graph Logic   ----------------
            const genders = [
                {
                    "code": "FEMALE",
                    "weight": 0.477616
                },
                {
                    "code": "MALE",
                    "weight": 0.522384
                }
            ]

            // All this to make sure first goes male and then female in -> series + labels
            const maleLabel = genders
                ?.filter((e) => e.code.toLowerCase() === 'male')
                ?.map((e) => ('' + e.code + '' + ' \t:' + '' + (e.weight * 100).toFixed(2) + '%')) || []
        
            const femaleLabel = genders
                ?.filter((e) => e.code.toLowerCase() === 'female')
                ?.map((e) => ('' + e.code + '' + ' \t:' + '' + (e.weight * 100).toFixed(2) + '%')) || []
        
            const maleSeries = genders
                ?.filter((e) => e.code.toLowerCase() === 'male')
                ?.map((e) => parseFloat((e.weight * 100).toFixed(2))) || []

            const femaleSeries = genders
                ?.filter((e) => e.code.toLowerCase() === 'female')
                ?.map((e) => parseFloat((e.weight * 100).toFixed(2))) || []

            const GSplit_options = {
                series: [...maleSeries, ...femaleSeries],
                labels: [...maleLabel, ...femaleLabel],
                stroke: {
                    width: 0,
                    colors: ['#fff']
                },
                theme: {
                    mode: "light",
                    palette: "palette2",
                    monochrome: {
                        enabled: false,
                        color: "#9e4ad1",
                        shadeTo: "light",
                        shadeIntensity: 0.65,
                    },
                },
                dataLabels: {
                    formatter: (val) => {
                        return ''
                    }
                },
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0,
                    },
                    type: 'donut',
                    height: 300,
                    width: 500,
                },
                colors: ['#350e5f', '#9e4ad1'],
                legend: {
                    centered: true,
                    position: "bottom",
                    horizontalAlign: "center",
                    fontSize: "14px",
                    fontFamily: "Roboto",
                    fontWeight: 500,
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: "#fff",
                        fillColors: undefined,
                        radius: 2,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0,
                    },
                },
            };

            const genderSplitChart = new ApexCharts(document.querySelector("#gender-group-split"), GSplit_options);
            genderSplitChart.render();

            // ---------------  Credibility Graph Logic   ----------------
            const credibility = 0.887999

            const CR_Options = {
                series: [parseFloat((credibility * 100).toFixed(2))],
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0,
                    },
                    height: 300,
                    type: 'radialBar',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    fontFamily: "Roboto",
                    radialBar: {
                        startAngle: -180,
                        endAngle: 180,
                        hollow: {
                            margin: 0,
                            size: '70%',
                            background: '#fff',
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: '#fff',
                            strokeWidth: '67%',
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },

                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: -10,
                                show: true,
                                color: '#808080',
                                fontSize: '16px',
                                fontFamily: 'Roboto',
                                fontWeight: '400'
                            },
                            value: {
                                formatter: function (val) {
                                    return '' + parseFloat(val) + '%';
                                },
                                color: '#333',
                                fontSize: '30px',
                                fontFamily: 'Roboto',
                                fontWeight: '600',
                                show: true,
                            }
                        }
                    }
                },
                fill: {
                    fontFamily: 'Roboto',
                    type: "gradient",
                    colors: ["#6832A3", "#350e5f"],
                    gradient: {
                        shade: "dark",
                        type: "vertical",
                        shadeIntensity: 0.5,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Audience Credibility'],
            }

            const credibilityChart = new ApexCharts(document.querySelector("#credibility-graph"), CR_Options);
            credibilityChart.render();

        </script>
    </body>

    </html>
    `;
};
