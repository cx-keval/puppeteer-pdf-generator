import React from "react";
import ReactDOMServer from "react-dom/server";
import millify from "millify";
import {
    CommentIcon,
    HeartIcon,
    PlayIcon,
    RupeeIcon,
    StarIcon,
    VerifiedBadge,
} from "../Icons";
// ----------------------------------------------------------
interface Profile {
    fullname: string;
    username: string;
    url: string;
    picture: string;
    followers: number;
    engagementRate: number;
    engagements: number;
}

interface Language {
    code: string;
    name: string;
}

interface Interest {
    id: number;
    name: string;
}

interface BrandAffinity {
    id: number;
    name: string;
}

interface Hashtag {
    tag: string;
    weight: number;
}

interface Mention {
    tag: string;
    weight: number;
}
interface Lookalike {
    userId: string;
    username: string;
    picture: string;
    fullname: string;
    url: string;
    followers: number;
    engagements: number;
}

interface AvgLikes {
    value: number;
    compared: number;
}

interface Followers {
    value: number;
    compared: number;
}

interface Stats {
    avgLikes: AvgLikes;
    followers: Followers;
}

interface AUDLanguage {
    code: string;
    name: string;
    weight: number;
}

interface AUDEthnicity {
    code: string;
    name: string;
    weight: number;
}

interface AUDGender {
    code: "FEMALE" | "MALE";
    weight: number;
}

interface AUDGeoCity {
    name: string;
    weight: number;
}

interface AUDGeoCountry {
    name: string;
    code: string;
    weight: number;
}

interface GenderPerAge {
    code: string;
    male: number;
    female: number;
}

interface AUDAge {
    code: string;
    weight: number;
}

interface AUDBrandAffinity {
    name: string;
    weight: number;
}

interface AUDInterest {
    name: string;
    weight: number;
}

interface AUDNotableUser {
    userId: string;
    username: string;
    picture: string;
    fullname: string;
    url: string;
    followers: number;
    engagements: number;
}

interface PopularPost {
    id: string;
    text: string;
    url: string;
    created: string;
    type: string;
    likes: number;
    comments: number;
    mentions: string[];
    hashtags: string[];
    thumbnail: string;
    image: string;
}

interface RecentPost {
    id: string;
    text: string;
    url: string;
    created: string;
    type: string;
    likes: number;
    comments: number;
    mentions: string[];
    hashtags: string[];
}

interface SponsoredPost {
    id: string;
    text: string;
    url: string;
    created: string;
    type: string;
    likes: number;
    comments: number;
    mentions: string[];
    hashtags: string[];
    thumbnail: string;
    image: string;
}

interface StatHistoryItem {
    month: string;
    followers: number;
    avgLikes: number;
    following: number;
}

interface GSInstagramProfile {
    userId: string;
    profile: Profile;
    isPrivate: boolean;
    isVerified: boolean;
    language: Language;
    accountType: string;
    avgReelsPlays: number;
    bio: string;
    interests: Interest[];
    brandAffinity: BrandAffinity[];
    hashtags: Hashtag[];
    mentions: Mention[];
    lookalikes: Lookalike[];
    stats: Stats;
    audience: {
        languages: AUDLanguage[];
        ethnicities: AUDEthnicity[];
        credibility: number;
        notable: number;
        genders: AUDGender[];
        geoCities: AUDGeoCity[];
        geoCountries: AUDGeoCountry[];
        gendersPerAge: GenderPerAge[];
        ages: AUDAge[];
        brandAffinity: AUDBrandAffinity[];
        interests: AUDInterest[];
        notableUsers: AUDNotableUser[];
        audienceLookalikes: AUDNotableUser[];
    };
    audienceLikers: {
        languages: AUDLanguage[];
        ethnicities: AUDEthnicity[];
        credibility: number;
        notable: number;
        genders: AUDGender[];
        geoCities: AUDGeoCity[];
        geoCountries: AUDGeoCountry[];
        gendersPerAge: GenderPerAge[];
        ages: AUDAge[];
        brandAffinity: AUDBrandAffinity[];
        interests: AUDInterest[];
        notableUsers: AUDNotableUser[];
        nonFollowerLikes: number;
    };
    postsCount: number;
    avgLikes: number;
    avgComments: number;
    avgViews: number;
    popularPosts: PopularPost[];
    recentPosts: RecentPost[];
    sponsoredPosts: SponsoredPost[];
    statHistory: StatHistoryItem[];
}

// ----------------------------------------------------------

interface IIGProfile {
    socialPage: GSInstagramProfile;
}
const IGProfile = ({ socialPage }: IIGProfile) => {
    function Component() {
        const { audience } = socialPage;

        // const [cityData, setCityData] = useState<AUDGeoCity[]>([]);
        // const [countryData, setCountryData] = useState<AUDGeoCountry[]>([]);
        // const [topAudience, setTopAudience] = useState(

        let cityData: AUDGeoCity[] = [];
        let countryData: AUDGeoCountry[] = [];
        let topAudience = {
            "Top Country": { main: "-", value: "-", code: "-" },
            "Top City": { main: "-", value: "-" },
            "Top Gender": { main: "-", value: "-" },
            "Top Age Group": { main: "-", value: "-" },
        };

        const getCityInDescending = () => {
            cityData = audience?.geoCities;
            topAudience = {
                ...topAudience,
                "Top City": {
                    main: audience?.geoCities[0].name,
                    value: (audience?.geoCities[0].weight * 100).toFixed(2),
                },
            };
        };

        const getCountryInDescending = () => {
            countryData = audience?.geoCountries;
            topAudience = {
                ...topAudience,
                "Top Country": {
                    main: audience?.geoCountries[0].name,
                    code: audience?.geoCountries[0].code,
                    value: (audience?.geoCountries[0].weight * 100).toFixed(2),
                },
            };
        };

        const setAgeData = () => {
            const age = [...audience?.ages];
            const gender = [...audience?.genders];
            const compare = (a: AUDAge, b: AUDAge) => {
                return b.weight - a.weight;
            };

            // Sort the objects using the compare function.
            age.sort(compare);
            gender.sort(compare);

            topAudience = {
                ...topAudience,
                "Top Age Group": {
                    main: age[0].code,
                    value: (age[0].weight * 100).toFixed(2),
                },
                "Top Gender": {
                    main: gender[0].code,
                    value: (gender[0].weight * 100).toFixed(2),
                },
            };
        };
        getCityInDescending();
        getCountryInDescending();
        setAgeData();

        const beautify = (number: number) =>
            millify(number, {
                precision: 1,
            });

        return (
            <div
                aria-label="main"
                className="w-[950px] m-auto mt-[10px] pb-[100px]"
            >
                <div aria-label="header flex" className="flex gap-4">
                    <div
                        aria-label="profile-and-name"
                        className="flex items-center gap-5 flex-[4]"
                    >
                        <div
                            aria-label="image-wrapper"
                            className="relative w-[125px] h-[125px] rounded-full"
                        >
                            <img
                                src={socialPage.profile.picture}
                                alt="profile pic"
                                className="w-[125px] h-[125px] rounded-full object-cover"
                            />
                            {socialPage?.isVerified && <VerifiedBadge />}
                        </div>
                        <div>
                            <h1
                                aria-label="name"
                                className="p-subhead font-semibold"
                            >
                                {socialPage?.profile?.fullname}
                            </h1>
                            <a
                                href={`https://www.instagram.com/${socialPage?.profile?.username}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p
                                    aria-label="username"
                                    className="text-sky-500"
                                >
                                    @{socialPage?.profile?.username}
                                </p>
                            </a>
                        </div>
                    </div>
                    <div
                        aria-label="description-and-stats"
                        className="flex-[6]"
                    >
                        <p aria-label="bio" className="text-gray-800">
                            {socialPage?.bio}
                        </p>
                        <div
                            aria-label="stats-container"
                            className="flex gap-5 mt-4"
                        >
                            <div aria-label="stat">
                                <p
                                    aria-label="stat-field"
                                    className="font-medium"
                                >
                                    Followers
                                </p>
                                <p
                                    aria-label="stat-value"
                                    className="text-[24px] font-medium text-primary"
                                >
                                    {beautify(socialPage?.profile?.followers)}
                                </p>
                            </div>
                            <div aria-label="stat">
                                <p
                                    aria-label="stat-field"
                                    className="font-medium"
                                >
                                    Engagement
                                </p>
                                <p
                                    aria-label="stat-value"
                                    className="text-[24px] font-medium text-primary"
                                >
                                    {beautify(socialPage?.profile?.engagements)}
                                </p>
                            </div>
                            <div aria-label="stat">
                                <p
                                    aria-label="stat-field"
                                    className="font-medium"
                                >
                                    Total Posts
                                </p>
                                <p
                                    aria-label="stat-value"
                                    className="text-[24px] font-medium text-primary"
                                >
                                    {beautify(socialPage?.postsCount)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Overview section starts now --> */}
                <div
                    aria-label="section-separator"
                    className=" border-b-[2px] border-primary mt-5"
                >
                    <div
                        aria-label="section-title"
                        className="w-fit ml-4 text-xl text-primary font-medium"
                    >
                        Overview
                    </div>
                </div>

                <div aria-label="highlighted-stats" className="flex gap-3 mt-5">
                    <div
                        aria-label="stat"
                        className="py-3 flex-1 border border-primary rounded-md bg-primary-50 flex flex-col justify-center items-center gap-1"
                    >
                        <HeartIcon />
                        <p
                            aria-label="stat-value"
                            className="text-[24px] font-semibold text-primary"
                        >
                            1.5M
                        </p>
                        <p aria-label="stat-field">Avg. Likes</p>
                    </div>
                    <div
                        aria-label="stat"
                        className="py-3 flex-1 border border-primary rounded-md bg-primary-50 flex flex-col justify-center items-center gap-1"
                    >
                        <CommentIcon />

                        <p
                            aria-label="stat-value"
                            className="text-[24px] font-semibold text-primary"
                        >
                            7.7K
                        </p>
                        <p aria-label="stat-field">Avg. Comments</p>
                    </div>
                    <div
                        aria-label="stat"
                        className="py-3 flex-1 border border-primary rounded-md bg-primary-50 flex flex-col justify-center items-center gap-1"
                    >
                        <StarIcon />

                        <p
                            aria-label="stat-value"
                            className="text-[24px] font-semibold text-primary"
                        >
                            0.84%
                        </p>
                        <p aria-label="stat-field">Engagement Rate</p>
                    </div>
                    <div
                        aria-label="stat"
                        className="py-3 flex-1 border border-primary rounded-md bg-primary-50 flex flex-col justify-center items-center gap-1"
                    >
                        <PlayIcon />

                        <p
                            aria-label="stat-value"
                            className="text-[24px] font-semibold text-primary"
                        >
                            8.9M
                        </p>
                        <p aria-label="stat-field">Avg. Reel Plays</p>
                    </div>
                    <div
                        aria-label="stat"
                        className="py-3 flex-1 border border-primary rounded-md bg-primary-50 flex flex-col justify-center items-center gap-1"
                    >
                        <RupeeIcon />

                        <p
                            aria-label="stat-value"
                            className="text-[24px] font-semibold text-primary"
                        >
                            23.6%
                        </p>
                        <p aria-label="stat-field">Paid Post Performance</p>
                    </div>
                </div>

                <p aria-label="card-title" className="card-title">
                    Followers Growth
                </p>
                <div className="card">
                    <div id="followers-growth-graph"></div>
                </div>

                <p aria-label="card-title" className="card-title">
                    Likes Growth
                </p>
                <div className="card">
                    <div id="likes-growth-graph"></div>
                </div>

                <p aria-label="card-title" className="card-title">
                    Recent Post Engagement
                </p>
                <div className="card">
                    <div id="post-engagement-graph"></div>
                </div>

                <div aria-label="interests-and-affinity" className="flex gap-4">
                    <div
                        aria-label="title-and-card-wrapper"
                        className="flex-1 flex flex-col"
                    >
                        <p aria-label="card-title" className="card-title">
                            Influencer Interests
                        </p>
                        <div className="card flex-1 flex flex-col gap-2">
                            {socialPage?.interests
                                ?.filter((_, idx) => idx < 5)
                                ?.map((interest, idx) => (
                                    <p aria-label="list-item" key={idx}>
                                        {interest.name}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div
                        aria-label="title-and-card-wrapper"
                        className="flex-1 flex flex-col"
                    >
                        <p aria-label="card-title" className="card-title">
                            Influencer Brand Affinity
                        </p>
                        <div className="card flex-1 flex flex-col gap-2">
                            {socialPage?.brandAffinity?.length > 0
                                ? socialPage?.brandAffinity
                                      ?.filter((_, idx) => idx < 5)
                                      ?.map((brand, idx) => (
                                          <p aria-label="list-item" key={idx}>
                                              {brand.name}
                                          </p>
                                      ))
                                : "No brand affinity found"}
                        </div>
                    </div>
                </div>

                <div aria-label="hashtags-and-mentions" className="flex gap-4">
                    <div
                        aria-label="title-and-card-wrapper"
                        className="flex-1 flex flex-col"
                    >
                        <p aria-label="card-title" className="card-title">
                            Influencer Interests
                        </p>
                        <div className="card flex-1 flex justify-start items-start gap-2 flex-wrap">
                            {socialPage?.hashtags?.length > 0
                                ? socialPage?.hashtags
                                      ?.filter((_, idx) => idx < 15)
                                      .map((item, idx) => (
                                          <p
                                              key={idx}
                                              aria-label="list-item"
                                              className="px-3 py-0.5 text-primary font-base bg-secondary-100 rounded-[50vw] border border-primary"
                                          >
                                              {`#${item.tag}`}
                                          </p>
                                      ))
                                : "No hashtags found"}
                        </div>
                    </div>
                    <div
                        aria-label="title-and-card-wrapper"
                        className="flex-1 flex flex-col"
                    >
                        <p aria-label="card-title" className="card-title">
                            Influencer Brand Affinity
                        </p>
                        <div className="card flex-1 flex justify-start items-start gap-2 flex-wrap">
                            {socialPage?.mentions?.length > 0
                                ? socialPage?.mentions
                                      ?.filter((_, idx) => idx < 15)
                                      .map((item, idx) => (
                                          <p
                                              key={idx}
                                              aria-label="list-item"
                                              className="px-3 py-0.5 text-primary font-base bg-secondary-100 rounded-[50vw] border border-primary"
                                          >
                                              {`@${item.tag}`}
                                          </p>
                                      ))
                                : "N/A"}
                        </div>
                    </div>
                </div>

                {/* <!-- Audience section starts now --> */}
                <div
                    aria-label="section-separator"
                    className=" border-b-[2px] border-primary mt-5"
                >
                    <div
                        aria-label="section-title"
                        className="w-fit ml-4 text-xl text-primary font-medium"
                    >
                        Audience
                    </div>
                </div>

                <div
                    aria-label="info-bar"
                    className="mt-[35px] border-l-[4px] py-[5px] px-2 border-secondary rounded-md bg-secondary-100"
                >
                    Audience data by{" "}
                    <span className="font-semibold">Followers</span>
                </div>

                <div
                    aria-label="info-and-summary-card-wrapper"
                    className="mt-5 flex gap-4"
                >
                    <div className="card flex-[8] flex gap-3">
                        {Object.keys(topAudience).map((item) => (
                            <div
                                key={item}
                                aria-label="single-info"
                                className="flex-1 flex flex-col gap-1 border-r-[1px] border-gray-300 last-of-type:border-r-[0px]"
                            >
                                <p
                                    aria-label="field"
                                    className="text-gray-700 text-sm"
                                >
                                    {item}
                                </p>
                                <p
                                    aria-label="value"
                                    className="mt-1 font-medium text-primary text-xl capitalize"
                                >
                                    {topAudience[
                                        item as keyof typeof topAudience
                                    ]?.main?.toLowerCase()}
                                </p>
                                <p
                                    aria-label="percentage"
                                    className="text-primary font-medium text-lg"
                                >
                                    {`${
                                        topAudience[
                                            item as keyof typeof topAudience
                                        ]?.value
                                    }%`}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div
                        aria-label="summary-card"
                        className="card flex-[3] text-sm border border-secondary bg-secondary-100"
                    >
                        Most of the followers are located in{" "}
                        <span className="font-semibold">{`${topAudience[
                            "Top Country"
                        ]?.main?.toLowerCase()} (${
                            topAudience["Top Country"]?.value
                        }%)`}</span>
                        , is{" "}
                        <span className="font-semibold">
                            {`${topAudience[
                                "Top Gender"
                            ]?.main?.toLowerCase()} (${
                                topAudience["Top Gender"].value
                            }%)`}
                            ,
                        </span>{" "}
                        and is between the ages of{" "}
                        <span className="font-semibold">
                            {`${topAudience[
                                "Top Age Group"
                            ]?.main?.toLowerCase()} (${
                                topAudience["Top Age Group"].value
                            }%)`}
                            .
                        </span>
                    </div>
                </div>

                {/* <!-- follower geography --> */}
                <p aria-label="card-title" className="card-title">
                    Follower Geography
                </p>
                <div aria-label="counties-geography" className="card">
                    <p
                        aria-label="card-title"
                        className="card-title text-gray-700 m-0 mb-3"
                    >
                        Countries
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {countryData?.map((item, idx) => {
                            const percentage =
                                (item.weight * 100).toFixed(2) + "%";

                            return (
                                <div aria-label="bar_with_title" key={idx}>
                                    <div
                                        aria-label="heading"
                                        className="flex justify-between"
                                    >
                                        <p>{item.name}</p>
                                        <p>{percentage}</p>
                                    </div>

                                    <div className="h-[10px] w-full rounded-full bg-gray-200">
                                        <div
                                            className="bg-secondary h-full rounded-full"
                                            aria-label="progress-bar"
                                            style={{ width: percentage }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div aria-label="cities-geography" className="card mt-5">
                    <p
                        aria-label="card-title"
                        className="card-title text-gray-700 m-0 mb-3"
                    >
                        Cities
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {cityData?.map((item, idx) => {
                            const percentage =
                                (item.weight * 100).toFixed(2) + "%";

                            return (
                                <div aria-label="bar_with_title" key={idx}>
                                    <div
                                        aria-label="heading"
                                        className="flex justify-between"
                                    >
                                        <p>{item.name}</p>
                                        <p>{percentage}</p>
                                    </div>

                                    <div className="h-[10px] w-full rounded-full bg-gray-200">
                                        <div
                                            className="bg-secondary h-full rounded-full"
                                            aria-label="progress-bar"
                                            style={{ width: percentage }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <p aria-label="card-title" className="card-title">
                    Age & Gender
                </p>
                <div className="card">
                    <div
                        aria-label="age-and-gender-wrapper"
                        className="flex gap-4"
                    >
                        <div
                            aria-label="single-graph"
                            className="flex-1 border-r-[1px] border-gray-300"
                        >
                            <div id="age-n-gender-ratio"></div>
                        </div>
                        <div
                            aria-label="single-graph"
                            className="flex-1 flex justify-center items-center"
                        >
                            <div id="gender-group-split"></div>
                        </div>
                    </div>
                </div>

                <div aria-label="credibility">
                    <p aria-label="card-title" className="card-title">
                        Credibility
                    </p>
                    <div className="card flex justify-center items-center">
                        <div id="credibility-graph"></div>
                        <div>
                            <p className="text-gray-700">
                                Active Followers:
                                <span className="font-semibold text-black">
                                    {beautify(
                                        (audience.credibility *
                                            100 *
                                            socialPage?.profile?.followers) /
                                            100
                                    )}
                                </span>
                            </p>
                            <p className="text-gray-700">
                                Inactive Followers:
                                <span className="font-semibold text-black">
                                    {beautify(
                                        ((100 - audience.credibility * 100) *
                                            socialPage?.profile?.followers) /
                                            100
                                    )}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!--  --> */}
                <div aria-label="language-and-ethnicity" className="flex gap-4">
                    <div
                        aria-label="title-and-card-wrapper"
                        className="flex-1 flex flex-col"
                    >
                        <p aria-label="card-title" className="card-title">
                            Languages
                        </p>
                        <div className="card flex-1 flex flex-col justify-start items-start gap-0">
                            {audience?.languages
                                ?.filter((_, idx) => idx < 5)
                                ?.map((item) => (
                                    <p
                                        key={item.code}
                                        aria-label="list-item"
                                        className="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium"
                                    >
                                        <span>{item.name}</span>
                                        <span>{`${(item?.weight * 100).toFixed(
                                            2
                                        )}%`}</span>
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div
                        aria-label="title-and-card-wrapper"
                        className="flex-1 flex flex-col"
                    >
                        <p aria-label="card-title" className="card-title">
                            Ethinicity
                        </p>
                        <div className="card flex-1 flex flex-col justify-start items-start gap-0">
                            {audience?.ethnicities
                                ?.filter((_, idx) => idx < 5)
                                ?.map((item) => (
                                    <p
                                        key={item.code}
                                        aria-label="list-item"
                                        className="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium"
                                    >
                                        <span>{item.name}</span>
                                        <span>{`${(item?.weight * 100).toFixed(
                                            2
                                        )}%`}</span>
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>

                <div aria-label="language-and-ethnicity" className="flex gap-4">
                    <div
                        aria-label="title-and-card-wrapper"
                        className="flex-1 flex flex-col"
                    >
                        <p aria-label="card-title" className="card-title">
                            Follower Brand Affinity
                        </p>
                        <div className="card flex-1 flex flex-col justify-start items-start gap-0">
                            {audience?.brandAffinity
                                ?.filter((_, idx) => idx < 5)
                                ?.map((item, idx) => (
                                    <p
                                        key={idx}
                                        aria-label="list-item"
                                        className="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium"
                                    >
                                        <span>{item.name}</span>
                                        <span>{`${(item?.weight * 100).toFixed(
                                            2
                                        )}%`}</span>
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div
                        aria-label="title-and-card-wrapper"
                        className="flex-1 flex flex-col"
                    >
                        <p aria-label="card-title" className="card-title">
                            Follower Interests
                        </p>
                        <div className="card flex-1 flex flex-col justify-start items-start gap-0">
                            {audience?.interests
                                ?.filter((_, idx) => idx < 5)
                                ?.map((item, idx) => (
                                    <p
                                        key={idx}
                                        aria-label="list-item"
                                        className="w-full px-3 py-1 rounded-md flex justify-between items-center first-of-type:border-l-[3px] border-secondary first-of-type:bg-secondary-100 first-of-type:font-medium"
                                    >
                                        <span>{item.name}</span>
                                        <span>{`${(item?.weight * 100).toFixed(
                                            2
                                        )}%`}</span>
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>

                {/* <!-- Notabel Followers --> */}
                <p className="text-2xl mt-[3rem]">Notable Followers</p>
                <table className="table-auto w-full mt-5">
                    <thead className="text-gray-700">
                        <tr>
                            <th className="text-start font-light">
                                Influencer
                            </th>
                            <th className="font-light">Followers</th>
                            <th className="text-end font-light">Engagement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {audience.notableUsers.length > 0
                            ? audience.notableUsers
                                  .filter((_, idx) => idx < 10)
                                  .map((user) => (
                                      <tr
                                          key={user.userId}
                                          className="border-b-[1px]"
                                          style={{ paddingBottom: "1rem" }}
                                      >
                                          <td
                                              aria-label="Influencer"
                                              className="py-3"
                                          >
                                              <div className="flex gap-2">
                                                  <img
                                                      src={user.picture}
                                                      alt="profile"
                                                      className="w-[50px] h-[50px] rounded-full object-cover"
                                                  />
                                                  <div>
                                                      <h1
                                                          aria-label="name"
                                                          className="text-xl font-semibold"
                                                      >
                                                          {user.fullname}
                                                      </h1>
                                                      <a
                                                          href={`https://www.instagram.com/${user.username}`}
                                                          target="_blank"
                                                          rel="noopener noreferrer"
                                                      >
                                                          <p
                                                              aria-label="username"
                                                              className="text-sky-500"
                                                          >
                                                              {`@${user.username}`}
                                                          </p>
                                                      </a>
                                                  </div>
                                              </div>
                                          </td>
                                          <td
                                              aria-label="followers"
                                              className="text-center font-semibold"
                                          >
                                              {beautify(user.followers)}
                                          </td>
                                          <td
                                              aria-label="Engagement"
                                              className="text-end font-semibold"
                                          >
                                              {beautify(user.engagements)}
                                          </td>
                                      </tr>
                                  ))
                            : "No Notable Followers"}
                    </tbody>
                </table>

                {/* <!-- Audience Lookalikes --> */}
                <p className="text-2xl mt-[3rem]">Audience Lookalikes</p>
                <table className="table-auto w-full mt-5">
                    <thead className="text-gray-700">
                        <tr>
                            <th className="text-start font-light">
                                Influencer
                            </th>
                            <th className="font-light">Followers</th>
                            <th className="text-end font-light">Engagement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {audience.audienceLookalikes.length > 0
                            ? audience.audienceLookalikes
                                  .filter((_, idx) => idx < 10)
                                  .map((user) => (
                                      <tr
                                          key={user.userId}
                                          className="border-b-[1px]"
                                          style={{ paddingBottom: "1rem" }}
                                      >
                                          <td
                                              aria-label="Influencer"
                                              className="py-3"
                                          >
                                              <div className="flex gap-2">
                                                  <img
                                                      src={user.picture}
                                                      alt="profile"
                                                      className="w-[50px] h-[50px] rounded-full object-cover"
                                                  />
                                                  <div>
                                                      <h1
                                                          aria-label="name"
                                                          className="text-xl font-semibold"
                                                      >
                                                          {user.fullname}
                                                      </h1>
                                                      <a
                                                          href={`https://www.instagram.com/${user.username}`}
                                                          target="_blank"
                                                          rel="noopener noreferrer"
                                                      >
                                                          <p
                                                              aria-label="username"
                                                              className="text-sky-500"
                                                          >
                                                              {`@${user.username}`}
                                                          </p>
                                                      </a>
                                                  </div>
                                              </div>
                                          </td>
                                          <td
                                              aria-label="followers"
                                              className="text-center font-semibold"
                                          >
                                              {beautify(user.followers)}
                                          </td>
                                          <td
                                              aria-label="Engagement"
                                              className="text-end font-semibold"
                                          >
                                              {beautify(user.engagements)}
                                          </td>
                                      </tr>
                                  ))
                            : "No Notable Followers"}
                    </tbody>
                </table>
            </div>
        );
    }

    const jsx = React.createElement(Component);
    const html = ReactDOMServer.renderToString(jsx);
    return html;
};

export default IGProfile;
