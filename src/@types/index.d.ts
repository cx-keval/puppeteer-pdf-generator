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
