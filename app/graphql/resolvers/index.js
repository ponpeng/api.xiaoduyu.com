import posts from './posts'
import topic from './topic'
import user from './user'
import comment from './comment'
import userNotification from './user-notification'
import notification from './notification'
import captcha from './captcha'
import account from './account'
import analysis from './analysis'
import qiniu from './qiniu'

let Query = {}
let Mutation = {}

Object.assign(Query, posts.query)
Object.assign(Mutation, posts.mutation)
Object.assign(Query, topic.query)
Object.assign(Mutation, topic.mutation)
Object.assign(Query, user.query)
Object.assign(Mutation, user.mutation)
Object.assign(Query, comment.query)
Object.assign(Mutation, comment.mutation)
Object.assign(Query, userNotification.query)
Object.assign(Mutation, userNotification.mutation)
Object.assign(Query, notification.query)
Object.assign(Mutation, notification.mutation)
Object.assign(Query, captcha.query)
Object.assign(Mutation, captcha.mutation)
Object.assign(Query, account.query)
Object.assign(Mutation, account.mutation)
Object.assign(Query, analysis.query)
Object.assign(Mutation, analysis.mutation)
Object.assign(Query, qiniu.query)
Object.assign(Mutation, qiniu.mutation)

var resolvers = {
  Query,
  Mutation
}

Object.assign(resolvers, posts.resolvers)
Object.assign(resolvers, topic.resolvers)
Object.assign(resolvers, user.resolvers)
Object.assign(resolvers, comment.resolvers)
Object.assign(resolvers, userNotification.resolvers)
Object.assign(resolvers, notification.resolvers)
Object.assign(resolvers, captcha.resolvers)
Object.assign(resolvers, account.resolvers)
Object.assign(resolvers, analysis.resolvers)
Object.assign(resolvers, qiniu.resolvers)

export default resolvers
