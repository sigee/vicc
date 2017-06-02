import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { DataServiceService } from './dataservice.service';

describe('DataServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DataServiceService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backend, options) => new Http(backend, options),
                    deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [HttpModule]
        });
    });

    it('should construct', async(inject([DataServiceService, MockBackend], (service) => {
        expect(service).toBeDefined();
    })));

    describe('getJokes()', () => {
        it('should parse response', async(inject([DataServiceService, MockBackend], (service, mockBackend) => {
            const mockResponse = {'data':
                [{'_id': 'abc123', 'cim': 'Vicc 01', 'tartalom': 'Description', 'tag': 'Category 01', '__v': 0, 'rate': []}]
            };
            mockBackend.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
            });

            service.getJokes().subscribe(res => {
                expect(res.data.length).toBe(1);
                expect(res.data[0]._id).toBe('abc123');
                expect(res.data[0].cim).toBe('Vicc 01');
                expect(res.data[0].tartalom).toBe('Description');
                expect(res.data[0].tag).toBe('Category 01');
                expect(res.data[0].__v).toBe(0);
                expect(res.data[0].rate).toEqual([]);
            });
        })));
    });

    describe('getJoke(id)', () => {
        it('should parse response', async(inject([DataServiceService, MockBackend], (service, mockBackend) => {
            const mockResponse = {'data':
                [{'_id': 'abc123', 'cim': 'Vicc 01', 'tartalom': 'Description', 'tag': 'Category 01', '__v': 0, 'rate': []}]
            };
            mockBackend.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
            });

            service.getJoke('asd123').subscribe(res => {
                expect(res.data.length).toBe(1);
                expect(res.data[0]._id).toBe('abc123');
                expect(res.data[0].cim).toBe('Vicc 01');
                expect(res.data[0].tartalom).toBe('Description');
                expect(res.data[0].tag).toBe('Category 01');
                expect(res.data[0].__v).toBe(0);
                expect(res.data[0].rate).toEqual([]);
            });
        })));
    });

    describe('getInCat(category, page)', () => {
        it('should parse response', async(inject([DataServiceService, MockBackend], (service, mockBackend) => {
            const mockResponse = {'data':
                [{'_id': 'abc123', 'cim': 'Vicc 01', 'tartalom': 'Description', 'tag': 'Category 01', '__v': 0, 'rate': []}]
            };
            mockBackend.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
            });

            service.getInCat('Category 01', 0).subscribe(res => {
                expect(res.data.length).toBe(1);
                expect(res.data[0]._id).toBe('abc123');
                expect(res.data[0].cim).toBe('Vicc 01');
                expect(res.data[0].tartalom).toBe('Description');
                expect(res.data[0].tag).toBe('Category 01');
                expect(res.data[0].__v).toBe(0);
                expect(res.data[0].rate).toEqual([]);
            });
        })));
    });

    describe('voteUp()', () => {
      /** @TODO: Implement it */
    });

    describe('getCategories()', () => {
        it('should parse response', async(inject([DataServiceService, MockBackend], (service, mockBackend) => {
            const mockResponse = {
                'data': [
                    {'_id': 'Category 01', 'count': 100},
                    {'_id': 'Category 02', 'count': 200},
                    {'_id': 'Category 03', 'count': 300}
                ]
            };
            mockBackend.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
            });

            service.getCategories().subscribe(res => {
                expect(res.data.length).toBe(3);
                expect(res.data[0]._id).toBe('Category 01');
                expect(res.data[0].count).toBe(100);
                expect(res.data[1]._id).toBe('Category 02');
                expect(res.data[1].count).toBe(200);
                expect(res.data[2]._id).toBe('Category 03');
                expect(res.data[2].count).toBe(300);
            });
        })));
    });

});
