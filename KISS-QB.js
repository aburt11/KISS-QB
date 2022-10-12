
var QueryBuilder = function() {
    this.query = '';
    this.select = [];
    this.from = [];
    this.where = [];
    this.orderBy = [];
    this.limit = [];
    this.offset = [];
    this.groupBy = [];
    this.having = [];

    this.addSelect = function(select) {
        this.select.push(select);
    };

    this.addFrom = function(from) {
        this.from.push(from);
    };

    this.addWhere = function(where) {
        this.where.push(where);
    };

    this.addOrderBy = function(orderBy) {
        this.orderBy.push(orderBy);
    };

    this.addLimit = function(limit) {
        this.limit.push(limit);
    };


    this.addOffset = function(offset) {
        this.offset.push(offset);
    };

    this.addGroupBy = function(groupBy) {
        this.groupBy.push(groupBy);
    };

    this.addHaving = function(having) {
        this.having.push(having);
    };

    this.getQueryObject = function() {
        var queryObject = {};
        queryObject.select = this.select;
        queryObject.from = this.from;
        queryObject.where = this.where;
        queryObject.orderBy = this.orderBy;
        queryObject.limit = this.limit;
        queryObject.offset = this.offset;
        queryObject.groupBy = this.groupBy;
        queryObject.having = this.having;
        return queryObject;
    };




    this.getQuery = function() {
        this.query = 'SELECT ';
        for (var i = 0; i < this.select.length; i++) {
            this.query += this.select[i];
            if (i < this.select.length - 1) {
                this.query += ', ';
            }
        }
        this.query += ' FROM ';
        for (var i = 0; i < this.from.length; i++) {
            this.query += this.from[i];
            if (i < this.from.length - 1) {
                this.query += ', ';
            }
        }
        if (this.where.length > 0) {
            this.query += ' WHERE ';
            for (var i = 0; i < this.where.length; i++) {
                this.query += this.where[i];
                if (i < this.where.length - 1) {
                    this.query += ' AND ';
                }
            }
        }
        if (this.orderBy.length > 0) {
            this.query += ' ORDER BY ';
            for (var i = 0; i < this.orderBy.length; i++) {

                this.query += this.orderBy[i];
                if (i < this.orderBy.length - 1) {
                    this.query += ', ';
                }
            }
        }
        if (this.limit.length > 0) {
            this.query += ' LIMIT ';
            for (var i = 0; i < this.limit.length; i++) {
                this.query += this.limit[i];
                if (i < this.limit.length - 1) {
                    this.query += ', ';
                }
            }
        }
        if (this.offset.length > 0) {
            this.query += ' OFFSET ';
            for (var i = 0; i < this.offset.length; i++) {
                this.query += this.offset[i];
                if (i < this.offset.length - 1) {
                    this.query += ', ';
                }
            }
        }
        if (this.groupBy.length > 0) {
            this.query += ' GROUP BY ';
            for (var i = 0; i < this.groupBy.length; i++) {
                this.query += this.groupBy[i];
                if (i < this.groupBy.length - 1) {
                    this.query += ', ';
                }
            }
        }
        if (this.having.length > 0) {
            this.query += ' HAVING ';
            for (var i = 0; i < this.having.length; i++) {
                this.query += this.having[i];
                if (i < this.having.length - 1) {
                    this.query += ' AND ';
                }
            }
        }



        return this.query;
    };
};

//* /////////////////////// TESTS AND USING IT /////////////////////////


//create the query builder object
var queryBuilder = new QueryBuilder();

//add a select statement
queryBuilder.addSelect("Id");
queryBuilder.addSelect("Name");
queryBuilder.addSelect("Account.Name");

//add a from statement
queryBuilder.addFrom("Contact");

//add a where statement
queryBuilder.addWhere("Id = '0033000000ZkLlX'");

//add a group by statement
queryBuilder.addGroupBy("Account.Name");

//add a order by statement
queryBuilder.addOrderBy("Name");

//add a limit statement
queryBuilder.addLimit(5);

//add a offset statement
queryBuilder.addOffset(2);

//get the query string
var query = queryBuilder.getQuery();

//log the query string
console.log(query);

//get the query string as a query object
var queryObject = queryBuilder.getQueryObject();

//log the query object
console.log(queryObject);

//* ///////////////////////  END TESTS AND USING IT /////////////////////////
//* /////////////////////////////////////////////////////////////////////////



