# REST API — Structured Notes

## Key Concepts
1. **Resources** – Everything accessible via REST API, identified by unique URI
2. **Representations** – Resources transferred as JSON/XML
3. **Stateless Communication** – Each request has all needed info; server stores no client state
4. **HTTP Methods** – Standard methods to perform actions
5. **HTTP Status Codes** – Indicate outcome of request

## HTTP Methods

| Method | Description | Idempotent? |
|--------|-------------|-------------|
| GET | Retrieves a resource/list, doesn't modify data | Yes |
| POST | Creates a new resource | No |
| PUT | Updates by replacing entire resource | Yes |
| PATCH | Updates by partially modifying resource | Yes |
| DELETE | Deletes a resource | Yes |

**Notes:**
- **Idempotent:** Same result on single or multiple identical calls (GET, PUT, PATCH, DELETE). POST is not idempotent.
- **Safe methods:** Don't modify server data (GET, HEAD, OPTIONS).

## HTTP Status Codes

### Classes
| Range | Meaning |
|-------|---------|
| 1xx | Informational — request received, processing |
| 2xx | Success — received, understood, accepted |
| 3xx | Redirection — further action needed |
| 4xx | Client Error — invalid request |
| 5xx | Server Error — server failed valid request |

### Common Codes
| Code | Category | Name | Use Case |
|------|----------|------|----------|
| 200 | Success | OK | Successful GET |
| 201 | Success | Created | Successful POST |
| 204 | Success | No Content | Successful DELETE |
| 301 | Redirection | Moved Permanently | Old URL → new URL |
| 302 | Redirection | Found (temporary) | Temp redirect |
| 304 | Redirection | Not Modified | Conditional GET |
| 400 | Client Error | Bad Request | Malformed/invalid request |
| 401 | Client Error | Unauthorized | Not authenticated |
| 403 | Client Error | Forbidden | Authenticated, no permission |
| 404 | Client Error | Not Found | Resource doesn't exist |
| 405 | Client Error | Method Not Allowed | Unsupported method |
| 409 | Client Error | Conflict | Conflicts with resource state |
| 422 | Client Error | Unprocessable Entity | Semantic errors |
| 500 | Server Error | Internal Server Error | Generic server failure |
| 501 | Server Error | Not Implemented | Feature not supported |
| 503 | Server Error | Service Unavailable | Server overload/maintenance |

## RESTful API Design Best Practices
- Use nouns for resources (`/users`, `/products`)
- Use plural nouns for collections
- Use HTTP methods per their semantics
- Use status codes appropriately
- Keep APIs consistent and predictable
- Design stateless APIs (no server-side session storage)

## Interview Q&A

**Q1: What is a REST API?**
Architectural style for networked apps; stateless client-server communication via standard HTTP methods/status codes; resources accessed via GET, POST, PUT, PATCH, DELETE.

**Q2: Common HTTP methods?**
GET (retrieve), POST (create), PUT (replace), PATCH (partial update), DELETE (remove).

**Q3: PUT vs PATCH?**
PUT replaces entire resource (needs full representation); PATCH partially updates (only changed fields).

**Q4: Why are status codes important?**
They tell client if request succeeded/failed/needs action; help troubleshoot API issues.

**Q5: Examples of status codes?**
200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error.

**Q6: What is idempotency? Which methods are idempotent?**
Same result no matter how many times called with same request. GET, PUT, PATCH, DELETE are idempotent; POST is not.

**Q7: What is a safe method? Which are safe?**
Doesn't modify server data. GET, HEAD, OPTIONS are safe.

**Q8: Should failed API operations return error codes?**
Yes — always with descriptive message. E.g., 400 for invalid data, 404 for missing resource, 500 for unexpected server error.

**Q9: Best practices for RESTful API design?**
Nouns for resources + pluralized collections, correct HTTP method semantics, proper status codes, consistency, statelessness.

**Q10: How to handle errors in REST APIs?**
Proper status codes, descriptive error message in response body (JSON), log errors server-side for debugging.