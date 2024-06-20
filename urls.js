const fs=require('fs');
const axios=require('axios');
const process=require('process');
const path=require('path');

const filename=process.argv[2];

if(!filename){
    console.error('Please provide a filename');
    process.exit(1);
}

//read file and process each URL provided
fs.readFile(filename,'utf8',(err,data)=>{
    if(err){
        console.error(`Error reading ${filename}: ${err}`);
        process.exit(1);
    }

    //split the URLs by line to be put into an array of lines, trim whitespaces and filter out empty lines
    const urls=data.split('\n').filter(line=>line.trim()!=='');

    //function to download and save HTML content
    const downloadUrl=async(url)=>{
        try{
            const response=await axios.get(url);
            const hostname=new URL(url).hostname;
            fs.writeFileSync(hostname,response.data);
            console.log(`Downloaded and wrote to ${hostname}`);
        } catch(err){
            console.error(`Error fetching ${url}: ${err}`);
        }
    };

    //download each URL
    for(let url of urls){
        downloadUrl(url);
    };
});