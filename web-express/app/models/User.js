import bcrypt from "bcrypt"
import dotenv from 'dotenv'
import applyDotenv from '../lambdas/applyDotenv.js'

export default function UserDataBase(mongoose) {
        const {mongoUri, port, jwtSecret } = applyDotenv(dotenv)
        const userSchema = new mongoose.Schema({
                company: {type:String, required:true},
                name: {type:String, required: true},
                userid: {type:String, unique: true, required: true},
                password: {type:String, required: true, trim: true},
                phone: {type:String, required:true},
        },{ versionKey : false });



        userSchema.pre('save', function (next){
                const user = this;
                const saltRounds = 10
                //salt를 이용해서 비밀번호 암호화한 후 보내줌 (비밀번호와 관련될 때만)
                //https://ko.wikipedia.org/wiki/Bcrypt
                //블로피시 암호기반 해시함수
                if(user.isModified('password')){
                        bcrypt.genSalt(saltRounds,function (err,salt){
                                if(err) return next(err)
                                bcrypt.hash(user.password, salt, function (err, hash){
                                        if(err) return next(err)
                                        user.password = hash
                                        next();
                                });
                        });
                }else {
                        next()
                }
        });

        userSchema.methods.comparePassword = function (plainPassword, cb) {
                //cb는 (err,isMatch)이다. plainPassword 유저가 입력한 password
                console.log(' >> plainPassword >> ' + plainPassword)
                console.log(' >> this.password >> ' + this.password)
                bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
                        if (err) {
                                return cb(err)
                        } else {
                                console.log(' >> isMatch >> ' + isMatch)
                                return cb(null, isMatch);
                        }
                })
        };



        return mongoose.model('User', userSchema)
}











