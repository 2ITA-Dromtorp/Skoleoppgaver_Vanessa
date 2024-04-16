# Database: Dromtorp 

## `Dromtorp`

| `Name`   | `Comment`             | `Character Set` | `Collation` | `Engine` |
| -------- | --------------------- | --------------- | ----------- | -------- |
| ElevTabell | The new table comment | ``              | ``          | ``       |
| KlasseTabell | The new table comment | ``              | ``          | ``       |

## `Primary Key`

| `Columns`         |
| ----------------- |
| TableId, TableId2 |

## `Indexes`

| `Columns` | `Unique` |
| --------- | -------- |
|           | `Yes`    |

## `Foreign Keys`

| `Columns` | `Ref Table` | `Ref Columns` | `Options` |
| --------- | ----------- | ------------- | --------- |
|           |             |               |           |

## `Columns`

| `Name`    | `Label`    | `Type`       | `Nullable` | `Default` | `Comment`       |
| --------- | ---------- | ------------ | ---------- | --------- | --------------- |
| TableId   | Table Id   | int          | `No`       |           | The Id column   |
| TableName | Table Name | nvarchar(50) | `No`       | ''        | The name column |
