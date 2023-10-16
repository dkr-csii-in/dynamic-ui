export interface AuthToken {
    lid: string;
    admin: boolean;
    name: string;
    userId: string;
    teamCodes: number[];
    title: string;

    authorityCode?: string;
    authorityRSN?: string;
    authorityAccess?: string[];
    authorityAccessCodes?: string[];
}

export interface PublicToken {
    lid: string;
    peopleRSN: number;
    name: string;
    anonymousLogin?: boolean;
    userid: string;
    cscUser: boolean;
    swcsUser: boolean;
    serviceName: string;
    serviceID: string;
    cafApplcationID: string;
    departmentD: string;
    userAgent: string;
    remoteAddress: string;
    ssoToken: string;
    departmentName: string;
    unitName: string;
    apSarkar: boolean;
}

export class WSToken {
    userId?: string;
    sessionAlive?: boolean;
}