import dotenv from "dotenv"
import applyDotenv from "../app/lambdas/applyDotenv.js";
//참조 https://m.blog.naver.com/nieah914/222006261945

const { aws_table_name, aws_region, accessKeyId, secretAccessKey} = applyDotenv(dotenv)


const awsConfig = {
    aws_table_name: aws_table_name,
    aws_local_config:{
        region: 'local',
        endpoint: 'http://localhost:5000'
    },
    aws_remote_config:{
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        region: aws_region
    }
}

export default awsConfig