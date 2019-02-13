const getData = require('./getData');
const axios = require('axios');

const mockPosts = [{ date: '2nd Januray, 2018',
readingTime: '2 mins',
title: 'The future of abstract art and the culture ...',
description:
 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
claps: 10,
liked: false,
image: 'abstract.png' }];

describe('getData () :', () => {
    let getMock;
    beforeAll(() => {
        getMock = jest.spyOn(axios, 'get');
        getMock.mockImplementation(() => Promise.resolve(mockPosts));
      });
      afterAll(() => {
        getMock.mockRestore();
      });
    it('should return an array', async (done) => {
        const blogData = await getData('https://api.myjson.com/bins/hc5ye');
        expect(blogData).toEqual(mockPosts);
        done();
    });
});