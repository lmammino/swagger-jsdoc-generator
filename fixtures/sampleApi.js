/**
 * @swagger
 *  definitions:
 *    Category:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          format: int64
 *        name:
 *          type: string
 */

/**
 * @swagger
 * /foo/bar/{sampleParam}/get:
 *   get:
 *     description: Get some sample data
 *     parameters:
 *      sampleParam:
 *        in: path
 *        required: true
 *        description: a sample parameters
 *        type: integer
 *        format: int32
 *      sampleQueryParam:
 *        in: query
 *        required: false
 *        description: a sample query parameters
 *        type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: some random output
 *         schema:
 *           $ref: '#/definitions/Category'
 *       NotFound:
 *         description: Entity not found.
 *       IllegalInput:
 *         description: Illegal input for operation.
 */
function mySampleApi() {
  // do something here
}
