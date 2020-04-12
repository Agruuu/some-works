package com.orhon.smartcampus.utils;

/**
 * 分页参数分装
 *
 * @author bao
 * @date   2019/6/26
 *
 *
 */
public class PageDto {
	
	private int id;
	
	/**当前页**/
	private int page;
	
	/**每页显示总记录数**/
	private int limit;

	/**每页的开始记录数**/
	private int start;

    protected long totalCount = -1L;

    protected long totalSize = 0;



	public int getPage() {
		if(page==0) {
			return 1;
		}
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}

    public int getLimit() {
    	if(page==0) {
			return 10;
		}
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public int getStart() {
		this.start = (page-1)*limit;
		return start;
	}
    public long getTotalCount() {
        return this.totalCount;
    }

    public void setTotalCount(long totalCount) {
        this.totalCount = totalCount;
    }
    public long getTotalSize() {
        if (this.totalCount < 0L) {
            return -1L;
        }

        long count = this.totalCount / this.limit;
        if (this.totalCount % this.limit > 0L) {
            count += 1L;
        }
        return count;
    }
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
}
