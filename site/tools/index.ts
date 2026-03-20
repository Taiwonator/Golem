// Need a script to convert mongo data into .md files

import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://9ac51e72ef59deeb:da68a93846b191fe1d18955ecceb97b5@mongodb.mongo-server--golem-payload-cms--tai-s2d2.addon.code.run/f326abf94719?replicaSet=rs0&authSource=f326abf94719&tls=true';


async function getAllData() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('f326abf94719');

        // Get posts
        const postsCollection = database.collection('posts');
        const posts = await postsCollection.find({}).toArray();
        console.log(`Found ${posts.length} posts`);
        Bun.write(`${Bun.env.PWD}/data/posts.json`, JSON.stringify(posts));

        // Get faqs
        const faqsCollection = database.collection('faqs');
        const faqs = await faqsCollection.find({}).toArray();
        console.log(`Found ${faqs.length} faqs`);
        Bun.write(`${Bun.env.PWD}/data/faqs.json`, JSON.stringify(faqs));

        // Get field-reports
        const fieldReportsCollection = database.collection('field-reports');
        const fieldReports = await fieldReportsCollection.find({}).toArray();
        console.log(`Found ${fieldReports.length} field-reports`);
        Bun.write(`${Bun.env.PWD}/data/field-reports.json`, JSON.stringify(fieldReports));

        // Get goals
        const goalsCollection = database.collection('goals');
        const goals = await goalsCollection.find({}).toArray();
        console.log(`Found ${goals.length} goals`);
        Bun.write(`${Bun.env.PWD}/data/goals.json`, JSON.stringify(goals));

        // Get projects
        const projectsCollection = database.collection('projects');
        const projects = await projectsCollection.find({}).toArray();
        console.log(`Found ${projects.length} projects`);
        Bun.write(`${Bun.env.PWD}/data/projects.json`, JSON.stringify(projects));

        return { posts, faqs, fieldReports, goals, projects };
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    } finally {
        await client.close();
    }
}

// Run the function
getAllData().then(data => {
    console.log('Data:', data);
}).catch(console.error);
