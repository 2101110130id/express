var express = require('express');
var router = express.Router();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri ="mongodb+srv://cu2101110130:v8mQM8f%40c@cluster0.d7hlzfq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');
// idが1のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);
res.json(note); })
module.exports = router;
module.exports = router;
