/* eslint-disable default-case */
/* eslint-disable no-lone-blocks */

//rating for mb is calculated: freq/100 * maxmem/10

export function Create_build(game, components) {
    let tmpA, tmp, cheapbuild = {}, topbuild = {};

    let cpus = components.cpus;
    let gpus = components.gpus;
    let rams = components.rams;
    let hdds = components.hdds;
    let mbs = components.mbs;
    // CPU selection
    {
        //Cheapest build
        tmpA = cpus.filter(t => t.rating > game.cpu && t.price < 5000); //i look for the cpus that have a rating larger than the one required for the game
        tmp = Math.min(...tmpA.map(b => b.price));
        tmpA = cpus.filter(t => t.price === tmp);//i try to get the cheaper one
        if (tmpA.length === 1) {
            cheapbuild.cpu = { ...tmpA[0] };// if i have only one at the lowest price i add it into the build
        }
        else {
            tmp = Math.max(...tmpA.map(b => b.rating));// if i have more i look for the one with the highest rating
            tmpA = cpus.filter(t => t.price === tmp);
            cheapbuild.cpu = { ...tmpA[0] };
        }
        //Best build
        tmpA = cpus.filter(t => t.rating > game.cpu * 1.2 && t.price < 5000); //i look for the cpus that have a rating larger than the one required for the game
        if (tmpA.length === 0)
            tmp = Math.max(...cpus.map(b => b.rating));
        tmp = Math.min(...tmpA.map(b => b.rating));
        tmpA = cpus.filter(t => t.rating === tmp);//i try to get the best performing
        if (tmpA.length === 1)
            topbuild.cpu = { ...tmpA[0] };// if i have only one with the highest rating i add it into the build
        else {
            tmp = Math.min(...tmpA.map(b => b.price));// if i have more i look for the one with the cheaper price
            tmpA = cpus.filter(t => t.price === tmp);
            topbuild.cpu = { ...tmpA[0] };
        }
    }
    // GPU selection
    {
        //Cheapest build
        tmpA = gpus.filter(t => t.rating > game.gpu && t.brand === game.opt && t.price < 5000); //i look for the cpus that have a rating larger than the one required for the game
        if (tmpA.length === 0)
            tmpA = gpus.filter(t => t.rating > game.gpu);
        tmp = Math.min(...tmpA.map(b => b.price));
        tmpA = gpus.filter(t => t.price === tmp);//i try to get the cheaper one
        if (tmpA.length === 1)
            cheapbuild.gpu = { ...tmpA[0] };// if i have only one at the lowest price i add it into the build
        else {
            tmp = Math.max(...tmpA.map(b => b.rating));// if i have more i look for the one with the highest rating
            tmpA = tmpA.filter(t => t.rating === tmp);
            cheapbuild.gpu = { ...tmpA[0] };
        }
        //Best build
        tmpA = gpus.filter(t => t.rating > game.gpu * 1.2 && t.brand === game.opt && t.price < 5000); //i look for the cpus that have a rating larger than the one required for the game
        if (tmpA.length === 0)
            tmpA = gpus.filter(t => t.rating > game.gpu * 1.2 && t.price < 5000);
        if (tmpA.length === 0)
            tmp = Math.max(...gpus.map(b => b.rating));
        tmp = Math.min(...tmpA.map(b => b.rating));
        tmpA = gpus.filter(t => t.rating === tmp);//i try to get the best performing
        if (tmpA.length === 1)
            topbuild.gpu = { ...tmpA[0] };// if i have only one with the highest rating i add it into the build
        else {
            tmp = Math.min(...tmpA.map(b => b.price));// if i have more i look for the one with the cheaper price
            tmpA = tmpA.filter(t => t.price === tmp);
            topbuild.gpu = { ...tmpA[0] };
        }
    }
    // MB selection
    {
        //Cheapest build
        tmpA = mbs.filter(t => t.socket === cheapbuild.cpu.socket); //i look for the cpus that have a compatible socket
        tmp = Math.min(...tmpA.map(b => b.price)); //i choose the  cheapest one
        tmpA = mbs.filter(t => t.price === tmp);
        if (tmpA.length === 1)
            cheapbuild.mb = { ...tmpA[0] };// if i have only one at the lowest price i add it into the build
        else {
            tmp = Math.max(...tmpA.map(b => b.rating));// if i have more i look for the one with the highest rating
            tmpA = tmpA.filter(t => t.rating === tmp);
            cheapbuild.mb = { ...tmpA[0] };
        }
        //Best build
        tmpA = mbs.filter(t => t.socket === topbuild.cpu.socket); //i look for the cpus that have a compatible socket
        tmp = Math.max(...tmpA.map(b => b.rating));
        tmpA = mbs.filter(t => t.rating === tmp);//i try to get the best performing
        if (tmpA.length === 1)
            topbuild.mb = { ...tmpA[0] };// if i have only one with the highest rating i add it into the build
        else {
            tmp = Math.min(...tmpA.map(b => b.price));// if i have more i look for the one with the cheaper price
            tmpA = mbs.filter(t => t.price === tmp);
            topbuild.mb = { ...tmpA[0] };
        }
    }
    // RAM selection
    {
        //Cheapest build
        tmpA = rams.filter(t => t.type === cheapbuild.mb.ram); //i look for the rams that have the same type supported by the mb
        tmpA = tmpA.filter(t => t.size > game.ram && t.rating > 700); // and that have enough memory to satisfy the game specs
        tmp = Math.min(...tmpA.map(b => b.price)); //i choose the  cheapest one
        tmpA = rams.filter(t => t.price === tmp);
        if (tmpA.length === 1)
            cheapbuild.ram = { ...tmpA[0] };// if i have only one at the lowest price i add it into the build
        else {
            tmp = Math.max(...tmpA.map(b => b.rating));// if i have more i look for the one with the highest rating
            tmpA = rams.filter(t => t.rating === tmp);
            cheapbuild.ram = { ...tmpA[0] };
        }
        //Best build
        tmpA = rams.filter(t => t.type === topbuild.mb.ram); //i look for the rams that have the same type supported by the mb
        tmpA = tmpA.filter(t => t.size > game.ram && t.rating > 800); // and that have enough memory to satisfy the game specs
        tmp = Math.max(...tmpA.map(b => b.rating)); // and that have enough memory to satisfy the game specs
        tmpA = rams.filter(t => t.rating === tmp);//i try to get the best performing
        if (tmpA.length === 1)
            topbuild.ram = { ...tmpA[0] };// if i have only one with the highest rating i add it into the build
        else {
            tmp = Math.min(...tmpA.map(b => b.price));// if i have more i look for the one with the cheaper price
            tmpA = rams.filter(t => t.price === tmp);
            topbuild.ram = { ...tmpA[0] };
        }
    }
    // HDD selection
    {
        //Cheapest build
        tmpA = hdds.filter(t => t.size > game.hdd  && t.rating > 700); //i look for the cpus that have a rating larger than the one required for the game
        tmp = Math.min(...tmpA.map(b => b.price));
        tmpA = hdds.filter(t => t.price === tmp);//i try to get the cheaper one
        if (tmpA.length === 1)
            cheapbuild.hdd = { ...tmpA[0] };// if i have only one at the lowest price i add it into the build
        else {
            tmp = Math.max(...tmpA.map(b => b.rating));// if i have more i look for the one with the highest rating
            tmpA = hdds.filter(t => t.rating === tmp);
            cheapbuild.hdd = { ...tmpA[0] };
        }
        //Best build
        tmpA = hdds.filter(t => t.size > game.hdd  && t.rating > 800); //i look for the cpus that have a rating larger than the one required for the game
        tmp = Math.max(...tmpA.map(b => b.rating));
        tmpA = hdds.filter(t => t.rating === tmp);//i try to get the best performing
        if (tmpA.length === 1)
            topbuild.hdd = { ...tmpA[0] };// if i have only one with the highest rating i add it into the build
        else {
            tmp = Math.min(...tmpA.map(b => b.price));// if i have more i look for the one with the cheaper price
            tmpA = hdds.filter(t => t.price === tmp);
            topbuild.hdd = { ...tmpA[0] };
        }
    }

    return ([cheapbuild, topbuild]);
}

export function Upgrade_build(game, build, components, budget) {
    let cheap_components = [], top_components = [], qp_components = [], rel_components = [], tmp, tmpA, tmpB, replaced_components = [];
    if (budget === null || budget === 0)
        budget = 1000000;

    let cpus = components.cpus;
    let gpus = components.gpus;
    let rams = components.rams;
    let hdds = components.hdds;
    let mbs = components.mbs;
    
    //CPU check
    if (game.cpu > cpus.filter(t => t.id === build.cpu)[0].rating) {
        replaced_components.push("cpu")
        let mb = mbs.filter(t => t.id === build.mb)[0];
        tmpA = cpus.filter(t => t.rating > game.cpu && t.socket === mb.socket && t.price <= budget && t.price < 5000); //i look for the cpus that have a rating larger than the one required for the game
        //cheap
        tmp = Math.min(...tmpA.map(b => b.price));
        tmpB = cpus.filter(t => t.price === tmp);//i try to get the cheaper one
        cheap_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
        //top
        tmp = Math.max(...tmpA.map(b => b.rating));
        tmpB = cpus.filter(t => t.rating === tmp);//i try to get the cheaper one
        top_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
        //qp
        tmp = Math.max(...tmpA.map(b => b.rating / b.price));
        tmpB = cpus.filter(t => t.rating / t.price === tmp);//i try to get the cheaper one
        qp_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
        //rel
        tmp = Math.max(...tmpA.map(b => b.reliability));
        tmpB = cpus.filter(t => t.reliability === tmp);//i try to get the cheaper one
        rel_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build

    }
    //GPU check
    if (game.gpu > gpus.filter(t => t.id === build.gpu)[0].rating) {
        replaced_components.push("gpu")
        tmpA = gpus.filter(t => t.rating > game.gpu && t.price <= budget && t.price < 5000)
        //cheap
        tmp = Math.min(...tmpA.map(b => b.price));
        tmpB = gpus.filter(t => t.price === tmp);//i try to get the cheaper one
        cheap_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
        //top
        tmp = Math.max(...tmpA.map(b => b.rating));
        tmpB = gpus.filter(t => t.rating === tmp);//i try to get the cheaper one
        top_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
        //qp
        tmp = Math.max(...tmpA.map(b => b.rating / b.price));
        tmpB = gpus.filter(t => t.rating / t.price === tmp);//i try to get the cheaper one
        qp_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
        //rel
        tmp = Math.max(...tmpA.map(b => b.reliability));
        tmpB = gpus.filter(t => t.reliability === tmp);//i try to get the cheaper one
        rel_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build

    }
    //RAM check
    if (game.ram > rams.filter(t => t.id === build.ram)[0].size) {
        replaced_components.push("ram")
        tmpA = rams.filter(t => t.type === mbs.filter(m => m.id === build.mb)[0].ram); //i look for the rams that have the same type supported by the mb
        tmpA = tmpA.filter(t => t.size > game.ram && t.rating > 70 && t.price <= budget); // and that have enough memory to satisfy the game specs
        //cheap
        tmp = Math.min(...tmpA.map(b => b.price));
        tmpB = rams.filter(t => t.price === tmp);//i try to get the cheaper one
        cheap_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
        //top
        tmp = Math.max(...tmpA.map(b => b.rating));
        tmpB = rams.filter(t => t.rating === tmp);//i try to get the cheaper one
        top_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
        //qp
        tmp = Math.max(...tmpA.map(b => b.rating / b.price));
        tmpB = rams.filter(t => t.rating / t.price === tmp);//i try to get the cheaper one
        qp_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
        //rel
        tmp = Math.max(...tmpA.map(b => b.reliability));
        tmpB = rams.filter(t => t.reliability === tmp);//i try to get the cheaper one
        rel_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
    }
    //HDD check
    if (game.hdd > hdds.filter(t => t.id === build.hdd)[0].size) {
        tmpA = hdds.filter(t => t.size > game.hdd && t.price <= budget); //i look for the cpus that have a rating larger than the one required for the game
        replaced_components.push("hdd")
        //cheap
        tmp = Math.min(...tmpA.map(b => b.price));
        tmpB = hdds.filter(t => t.price === tmp);//i try to get the cheaper one
        cheap_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
        //top
        tmp = Math.max(...tmpA.map(b => b.rating));
        tmpB = hdds.filter(t => t.rating === tmp);//i try to get the cheaper one
        top_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
        //qp
        tmp = Math.max(...tmpA.map(b => b.rating / b.price));
        tmpB = hdds.filter(t => t.rating / t.price === tmp);//i try to get the cheaper one
        qp_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build
        //rel
        tmp = Math.max(...tmpA.map(b => b.reliability));
        tmpB = hdds.filter(t => t.reliability === tmp);//i try to get the cheaper one
        rel_components.push(tmpB[0]);// if i have only one at the lowest price i add it into the build

    }

    //If the previous step did not find any component lacking essential performance i look for the least performing in the build
    if (replaced_components.length === 0) {
        let comp = {}, worst, ratings = [], tmp;
        
        comp.n = 'cpu';
        comp.v = cpus.filter(t => t.id === build.cpu)[0].rating;
        ratings.push({ ...comp });
        comp.n = 'gpu';
        comp.v = gpus.filter(t => t.id === build.gpu)[0].rating;
        ratings.push({ ...comp });
        comp.n = 'ram';
        comp.v = rams.filter(t => t.id === build.ram)[0].rating;
        ratings.push({ ...comp });
        comp.n = 'hdd';
        comp.v = hdds.filter(t => t.id === build.hdd)[0].rating;
        ratings.push({ ...comp });
        //worst = { ...ratings[ratings.map(t => t.v).indexOf(Math.min(...ratings.map(t => t.v)))] }//worst component selection
        worst = {...ratings.filter(t => t.v === Math.min(...ratings.map(t => t.v)))[0]}

        let mb = mbs.filter(t => t.id === build.mb)[0];

        switch (worst.n) {
            case "cpu":         
                if (worst.v <= game.cpu){
                    replaced_components.push("cpu")
                    //Cheap
                    tmpA = cpus.filter(t => t.rating > worst.v && t.socket === mb.socket); //i look for the cpus that have a rating larger than the one required for the game
                    tmp = Math.min(...tmpA.map(b => b.price));
                    cheap_components.push(...cpus.filter(t => t.price === tmp));//i have the lowest price i add it into the build
                    //Best
                    tmpA = cpus.filter(t => t.rating > worst.v*1.2 && t.socket === mb.socket && t.price < budget && t.price < 5000); //i look for the cpus that have a rating larger than the one required for the game
                    tmp = Math.min(...tmpA.map(b => b.rating));
                    top_components.push(...cpus.filter(t => t.rating === tmp));// if i have only one with the highest rating i add it into the build
                    //Top QP
                    tmpA = cpus.filter(t => t.rating > worst.v && t.socket === mb.socket && t.price < budget); //i look for the cpus that have a rating larger than the one required for the game
                    tmp = Math.max(...tmpA.map(b => b.rating / b.price));
                    qp_components.push(...cpus.filter(t => t.rating / t.price === tmp));
                    //Most Reliable
                    tmpA = cpus.filter(t => t.rating > worst.v && t.socket === mb.socket && t.price < budget); //i look for the cpus that have a rating larger than the one required for the game
                    tmp = Math.max(...tmpA.map(b => b.reliability));
                    rel_components.push(...cpus.filter(t => t.reliability === tmp));
                }
                break;
            case "gpu":
                if(worst.v <= game.gpu){
                replaced_components.push("gpu")
                //Cheap
                tmpA = gpus.filter(t => t.rating > worst.v); //i look for the cpus that have a rating larger than the one required for the game
                tmp = Math.min(...tmpA.map(b => b.price));
                cheap_components.push(...gpus.filter(t => t.price === tmp));//i have the lowest price i add it into the build
                //Best
                tmpA = gpus.filter(t => t.rating > worst.v*1.2 && t.price < budget && t.price < 5000); //i look for the cpus that have a rating larger than the one required for the game
                tmp = Math.min(...tmpA.map(b => b.rating));
                top_components.push(...gpus.filter(t => t.rating === tmp));// if i have only one with the highest rating i add it into the build
                //Top QP
                tmpA = gpus.filter(t => t.rating > worst.v && t.price < budget); //i look for the cpus that have a rating larger than the one required for the game
                tmp = Math.max(...tmpA.map(b => b.rating / b.price));
                qp_components.push(...gpus.filter(t => t.rating / t.price === tmp));
                //Most Reliable
                tmpA = gpus.filter(t => t.rating > worst.v && t.price < budget); //i look for the cpus that have a rating larger than the one required for the game
                tmp = Math.max(...tmpA.map(b => b.reliability));
                rel_components.push(...gpus.filter(t => t.reliability === tmp));
            }
                break;
            case "ram":
                if(worst.v <= 800){
                    replaced_components.push("ram")
                    //Cheap
                    tmpA = rams.filter(t => t.type === mb.ram); //i look for the rams that have the same type supported by the mb
                    tmpA = tmpA.filter(t => t.size > game.ram && t.rating > 800); // and that have enough memory to satisfy the game specs
                    tmp = Math.min(...tmpA.map(b => b.price));
                    cheap_components.push(...rams.filter(t => t.price === tmp));
                    //Best
                    tmpA = rams.filter(t => t.type === mb.ram); //i look for the rams that have the same type supported by the mb
                    tmpA = tmpA.filter(t => t.size > game.ram && t.rating > 800); // and that have enough memory to satisfy the game specs
                    tmp = Math.min(...tmpA.map(b => b.rating));
                    top_components.push(...rams.filter(t => t.rating === tmp));
                    //Top QP
                    tmpA = rams.filter(t => t.type === mb.ram); //i look for the rams that have the same type supported by the mb
                    tmpA = tmpA.filter(t => t.size > game.ram && t.rating > 800); // and that have enough memory to satisfy the game specs
                    tmp = Math.max(...tmpA.map(b => b.rating / b.price));
                    qp_components.push(...rams.filter(t => t.rating / t.price === tmp));
                    //Top Reliability
                    tmpA = rams.filter(t => t.type === mb.ram); //i look for the rams that have the same type supported by the mb
                    tmpA = tmpA.filter(t => t.size > game.ram && t.rating > 800); // and that have enough memory to satisfy the game specs
                    tmp = Math.max(...tmpA.map(b => b.reliability));
                    rel_components.push(...rams.filter(t => t.reliability === tmp));
                }
                break;
            case "hdd":
                if(worst.v <= 700){
                replaced_components.push("hdd")
                //Cheap
                tmpA = hdds.filter(t => t.size > game.hdd && t.rating > 700); //i look for the cpus that have a rating larger than the one required for the game
                tmp = Math.min(...tmpA.map(b => b.price));
                cheap_components.push(...hdds.filter(t => t.price === tmp));
                //Best
                tmpA = hdds.filter(t => t.size > game.hdd && t.rating > 700); //i look for the cpus that have a rating larger than the one required for the game
                tmp = Math.min(...tmpA.map(b => b.rating));
                top_components.push(...hdds.filter(t => t.rating === tmp));
                //Top QP
                tmpA = hdds.filter(t => t.size > game.hdd && t.rating > 700); //i look for the cpus that have a rating larger than the one required for the game
                tmp = Math.max(...tmpA.map(b => b.rating / b.price));
                qp_components.push(...hdds.filter(t => t.rating / t.price === tmp));
                //Most Reliable
                tmpA = hdds.filter(t => t.size > game.hdd && t.rating > 700); //i look for the cpus that have a rating larger than the one required for the game
                tmp = Math.max(...tmpA.map(b => b.reliability));
                rel_components.push(...hdds.filter(t => t.reliability === tmp));
            }
                break;
        }
    }
    console.log([replaced_components, cheap_components, top_components, qp_components, rel_components])
    return ([replaced_components, cheap_components, top_components, qp_components, rel_components]);
}

const functions = { Create_build, Upgrade_build }

export default functions